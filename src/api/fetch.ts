import { CommonState, router } from "./router.js";
import { metadata } from "../database/db.js";
import storage from "../storage/index.js";
import { Account, deductAccount, getAccountFromPubkey } from "../database/methods.js";
import { DOWNLOAD_COST, UNIT } from "../env.js";
import { GIGABYTE } from "../const.js";
import { formatFileSize, getHashFromParams } from "../helpers/koa.js";
import logger from "../logger.js";

const log = logger.extend("Download");

router.get<CommonState>("/:hash", async (ctx) => {
  const hash = getHashFromParams(ctx);
  if (!(await metadata.hasBlob(hash)) || !(await storage.hasBlob(hash))) return ctx.throw(404, "Not found");

  const owners = await metadata.listOwners(hash);
  const accounts = owners.map(getAccountFromPubkey).filter((a) => !!a && a.download > 0) as Account[];

  // TODO: upgrade to 402
  if (accounts.length === 0) return ctx.throw(400, "Download balance depleted");

  const blob = await metadata.getBlob(hash);

  ctx.status = 200;
  if (blob.type) ctx.set("Content-Type", blob.type);
  ctx.body = await storage.readBlob(hash);

  if (DOWNLOAD_COST > 0) {
    // deduct from accounts when request is finished
    ctx.res.on("finish", () => {
      const sizeInGb = blob.size / GIGABYTE;
      const cost = sizeInGb * DOWNLOAD_COST * 1000;
      const perAccount = Math.max(cost / accounts.length, 1);

      log(`Charging ${accounts.length} accounts ${perAccount}${UNIT} for ${formatFileSize(blob.size)} download`);
      for (const account of accounts) {
        deductAccount(account.pubkey, "download", Math.round(perAccount));
      }
    });
  }
});
