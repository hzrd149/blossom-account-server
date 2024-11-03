import HttpErrors from "http-errors";
import { BlobMetadata } from "blossom-server-sdk";
import fs from "fs";

import { CommonState, getBlobDescriptor, log, router, saveAuthToken } from "./router.js";
import { hasUsedToken } from "../database/methods.js";
import uploadMiddleware, { TempFileState } from "../middleware/upload.js";
import { getFileHash } from "../helpers/file.js";
import { metadata } from "../database/db.js";
import storage from "../storage/index.js";
import { unixNow } from "../helpers/date.js";

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

    // check rules
    const contentType = ctx.header["content-type"] || (ctx.header["x-content-type"] as string | undefined);
    let contentLength: number | undefined = undefined;
    if (typeof ctx.header["x-content-length"] === "string") {
      contentLength = parseInt(ctx.header["x-content-length"]);
    } else if (ctx.header["content-length"]) {
      contentLength = parseInt(ctx.header["content-length"]);
    }

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

  // if auth is required, check to see if the sha256 is in the auth event
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

  // add owner
  if (ctx.state.auth.pubkey && !metadata.hasOwner(hash, ctx.state.auth.pubkey)) {
    await metadata.addOwner(blob.sha256, ctx.state.auth.pubkey);
  }

  // remember the auth token
  saveAuthToken(ctx.state.auth);

  ctx.status = 200;
  ctx.body = getBlobDescriptor(blob, ctx.request);
});
