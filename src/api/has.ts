import { metadata } from "../database/db.js";
import { Account, getAccount } from "../database/methods.js";
import { getHashFromParams } from "../helpers/koa.js";
import { router } from "./router.js";

router.head("/:hash", async (ctx) => {
  const hash = getHashFromParams(ctx);

  const blob = await metadata.getBlob(hash);
  if (blob) {
    const owners = await metadata.listOwners(hash);
    const accounts = owners.map(getAccount).filter((a) => !!a && a.download > 0) as Account[];

    // TODO: upgrade to 402
    if (accounts.length === 0) return ctx.throw(400, "Download balance depleted");

    // signal support for range requests
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests
    if (blob.type) ctx.type = blob.type;
    ctx.length = blob.size;
    ctx.status = 200;
  } else ctx.status = 404;
});
