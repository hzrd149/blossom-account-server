import { CommonState, log, router, saveAuthToken } from "./router.js";
import { hasUsedToken } from "../database/methods.js";
import { metadata } from "../database/db.js";
import storage from "../storage/index.js";
import { getHashFromParams } from "../helpers/koa.js";

router.delete<CommonState>("/:hash", async (ctx) => {
  const hash = getHashFromParams(ctx);

  if (!ctx.state.auth) return ctx.throw(401, "Missing Auth event");
  if (ctx.state.authType !== "delete") return ctx.throw(400, "Incorrect Auth type");
  if (!ctx.state.auth.tags.some((t) => t[0] === "x" && t[1] === hash)) return ctx.throw(400, "Auth missing hash");
  if (await hasUsedToken(ctx.state.auth.id)) return ctx.throw(400, "Auth already used");

  // skip if blob dose not exist
  if (!metadata.hasBlob(hash)) {
    ctx.status = 200;
    return;
  }

  const pubkey = ctx.state.auth.pubkey;

  // check if pubkey owns blob
  if (metadata.hasOwner(hash, pubkey)) {
    // remove owner
    metadata.removeOwner(hash, pubkey);
    await saveAuthToken(ctx.state.auth);

    // remove blob if there are no owners
    if (metadata.listOwners(hash).length === 0) {
      log(`Removing ${hash} because it has no owners`);
      await metadata.removeBlob(hash);
      if (await storage.hasBlob(hash)) await storage.removeBlob(hash);
    }
  }

  ctx.status = 200;
});
