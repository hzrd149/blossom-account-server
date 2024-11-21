import { GIGABYTE, MONTH_IN_HOURS } from "./const.js";
import { metadata } from "./database/db.js";
import { deductAccount, getAllBlobAndOwners } from "./database/methods.js";
import { STORAGE_COST } from "./env.js";
import { unixNow } from "./helpers/date.js";
import logger from "./logger.js";
import storage from "./storage/index.js";

const log = logger.extend("Storage");

/** @param delta time passed in seconds */
async function chargeForStorage(delta: number) {
  const hours = delta / 60 / 60;
  const blobs = await getAllBlobAndOwners();

  for (const blob of blobs) {
    if (blob.owners.length === 0) {
      // remove blob
      log(`Removing ${blob.sha256}`);
      await metadata.removeBlob(blob.sha256);
      await storage.removeBlob(blob.sha256);
    } else {
      // charge accounts
      log(`Charging ${blob.owners} owners for ${blob.sha256}`);
      const cost = (blob.size / GIGABYTE) * (hours / MONTH_IN_HOURS);
      const costPerAccount = cost / blob.owners.length;

      for (const pubkey of blob.owners) deductAccount(pubkey, "storage", costPerAccount);
    }
  }

  const time = unixNow();
  setTimeout(() => chargeForStorage(unixNow() - time), 60 * 60_000);
}

if (STORAGE_COST > 0) {
  const time = unixNow();
  setTimeout(() => chargeForStorage(unixNow() - time), 60 * 60_000);
}
