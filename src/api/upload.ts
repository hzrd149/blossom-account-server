import HttpErrors from "http-errors";
import { BlobMetadata } from "blossom-server-sdk";
import fs from "fs";

import { CommonState, getBlobDescriptor, router, saveAuthToken } from "./router.js";
import { checkAccount, hasUsedToken, deductAccount } from "../database/methods.js";
import uploadMiddleware, { TempFileState } from "../middleware/upload.js";
import { getFileHash } from "../helpers/file.js";
import { metadata } from "../database/db.js";
import storage from "../storage/index.js";
import { unixNow } from "../helpers/date.js";
import { UNIT, UPLOAD_COST } from "../env.js";
import { GIGABYTE } from "../const.js";
import logger from "../logger.js";
import { npubEncode } from "nostr-tools/nip19";
import { formatFileSize } from "../helpers/koa.js";

const log = logger.extend("Upload");

type UploadState = CommonState & {
  contentType: string;
  contentLength: string;
};

// parse upload headers
router.all<CommonState>("/upload", async (ctx, next) => {
  if (ctx.method === "HEAD" || ctx.method === "PUT") {
    if (!ctx.state.auth) throw new HttpErrors.Unauthorized("Missing Auth event");
    if (ctx.state.authType !== "upload") throw new HttpErrors.Unauthorized("Auth event should be 'upload'");
    if (hasUsedToken(ctx.state.auth.id)) throw new HttpErrors.BadRequest("Auth event already used");

    // BUD-06, check if hash is in auth event
    const sha256 = ctx.header["x-sha-256"];
    if (typeof sha256 === "string" && !ctx.state.auth.tags.some((t) => t[0] === "x" && t[1] === sha256)) {
      throw new HttpErrors.BadRequest("Auth missing sha256");
    }

    // get content type and length
    const contentType = ctx.header["content-type"] || (ctx.header["x-content-type"] as string | undefined);
    let contentLength: number | undefined = undefined;
    if (typeof ctx.header["x-content-length"] === "string") {
      contentLength = parseInt(ctx.header["x-content-length"]);
    } else if (ctx.header["content-length"]) {
      contentLength = parseInt(ctx.header["content-length"]);
    }

    // check auth
    if (!ctx.state.auth) return ctx.throw(401, "Auth required");
    if (UPLOAD_COST > 0 && (await checkAccount(ctx.state.auth.pubkey, "upload")) === false)
      return ctx.throw(400, "Upload balance depleted");

    // set tmp state
    ctx.state.contentType = contentType;
    ctx.state.contentLength = contentLength;
  }

  return await next();
});

router.head<UploadState>("/upload", async (ctx) => {
  // if checks pass allow upload
  ctx.status = 200;
});

router.put<UploadState & TempFileState>("/upload", uploadMiddleware(), async (ctx) => {
  if (!ctx.state.uploadPath || !ctx.state.uploadSize) return ctx.throw(500, "Upload failed");
  const { contentType } = ctx.state;

  const hash = await getFileHash(ctx.state.uploadPath);

  if (!ctx.state.auth) return ctx.throw(401, "Auth required");
  if (!ctx.state.auth.tags.some((t) => t[0] === "x" && t[1] === hash)) return ctx.throw(400, "Incorrect blob sha256");

  let blob: BlobMetadata;

  // save blob if it does not exist
  if (!metadata.hasBlob(hash)) {
    log("Saving", hash, contentType);
    await storage.writeBlob(hash, fs.createReadStream(ctx.state.uploadPath), contentType);

    blob = metadata.addBlob({ sha256: hash, size: ctx.state.uploadSize, type: contentType, uploaded: unixNow() });
  } else {
    blob = metadata.getBlob(hash);
  }

  const pubkey = ctx.state.auth.pubkey;

  // add owner
  if (pubkey && !metadata.hasOwner(hash, pubkey)) {
    await metadata.addOwner(blob.sha256, pubkey);
  }

  // remember the auth token
  saveAuthToken(ctx.state.auth);

  // deduct account
  if (UPLOAD_COST > 0) {
    const sizeInGb = ctx.state.uploadSize / GIGABYTE;
    const cost = sizeInGb * UPLOAD_COST;
    log(
      `Charging ${npubEncode(pubkey)} ${cost.toFixed(3)}${UNIT} for ${formatFileSize(ctx.state.uploadSize)} uploaded`,
    );
    await deductAccount(pubkey, "upload", cost);
  }

  ctx.status = 200;
  ctx.body = getBlobDescriptor(blob, ctx.request);
});
