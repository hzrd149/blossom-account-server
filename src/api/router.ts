import { Request } from "koa";
import Router from "@koa/router";
import { verifyEvent, NostrEvent } from "nostr-tools";
import { BlobMetadata } from "blossom-server-sdk";
import HttpErrors from "http-errors";
import mime from "mime";

import logger from "../logger.js";
import { addToken } from "../database/methods.js";
import { unixNow } from "../helpers/date.js";

export const log = logger.extend("api");
export const router = new Router();
export type CommonState = { auth?: NostrEvent; authType?: string; authExpiration?: number };

export function getBlobDescriptor(blob: BlobMetadata, req: Request) {
  const ext = blob.type ? mime.getExtension(blob.type) : undefined;

  return {
    sha256: blob.sha256,
    size: blob.size,
    uploaded: blob.uploaded,
    type: blob.type,
    url: new URL(blob.sha256 + (ext ? "." + ext : ""), req.href),
  };
}

function parseAuthEvent(auth: NostrEvent) {
  const now = unixNow();
  if (auth.kind !== 24242) throw new HttpErrors.BadRequest("Unexpected auth kind");
  const type = auth.tags.find((t) => t[0] === "t")?.[1];
  if (!type) throw new HttpErrors.BadRequest("Auth missing type");
  const expiration = auth.tags.find((t) => t[0] === "expiration")?.[1];
  if (!expiration) throw new HttpErrors.BadRequest("Auth missing expiration");
  if (parseInt(expiration) < now) throw new HttpErrors.BadRequest("Auth expired");
  if (!verifyEvent(auth)) throw new HttpErrors.BadRequest("Invalid Auth event");

  return { auth, type, expiration: parseInt(expiration) };
}

export function saveAuthToken(event: NostrEvent) {
  const { expiration, type } = parseAuthEvent(event);
  addToken({
    id: event.id,
    expiration: expiration,
    type: type,
    event,
  });
}

// parse auth headers
router.use(async (ctx, next) => {
  const authStr = ctx.headers["authorization"] as string | undefined;

  if (authStr?.startsWith("Nostr ")) {
    const auth = authStr ? (JSON.parse(atob(authStr.replace(/^Nostr\s/i, ""))) as NostrEvent) : undefined;
    if (auth) {
      const { type, expiration } = parseAuthEvent(auth);
      ctx.state.auth = auth;
      ctx.state.authType = type;
      ctx.state.authExpiration = expiration;
    }
  }

  await next();
});
