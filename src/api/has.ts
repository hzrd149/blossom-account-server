import { metadata } from "../database/db.js";
import { Account, getAccountFromPubkey } from "../database/methods.js";
import { getHashFromParams } from "../helpers/koa.js";
import { router } from "./router.js";

router.head("/:hash", async (ctx) => {
  const hash = getHashFromParams(ctx);

  if (await metadata.hasBlob(hash)) {
    const owners = await metadata.listOwners(hash);
    const accounts = owners.map(getAccountFromPubkey).filter((a) => !!a && a.download > 0) as Account[];

    // TODO: upgrade to 402
    if (accounts.length === 0) return ctx.throw(400, "Download balance depleted");

    ctx.status = 200;
  } else ctx.status = 404;
});
