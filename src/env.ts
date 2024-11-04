import "dotenv/config";
import { CashuMint, decodePaymentRequest } from "@cashu/cashu-ts";

if (!process.env.MINTS) throw new Error("Missing MINTS");
if (!process.env.UNIT) throw new Error("Missing UNIT");
if (!process.env.PAYOUT) throw new Error("Missing PAYOUT");
if (!process.env.UPLOAD_COST) throw new Error("Missing UPLOAD_COST");
if (!process.env.STORAGE_COST) throw new Error("Missing STORAGE_COST");
if (!process.env.DOWNLOAD_COST) throw new Error("Missing DOWNLOAD_COST");

const UNIT = process.env.UNIT;
const MINTS = process.env.MINTS.split(",").map((url) => new CashuMint(url));
if (MINTS.length === 0) throw new Error("Requires at least one mint");

// check mints
for (const mint of MINTS) {
  try {
    const info = await mint.getInfo();
    console.log(`Connected to ${info.name} mint`);
  } catch (error) {
    console.log(`Failed to connect to mint: ${mint.mintUrl}`);
    console.log(error);
    process.exit(1);
  }
}

const PAYOUT = decodePaymentRequest(process.env.PAYOUT);
if (PAYOUT.singleUse) throw new Error("PAYOUT must be a reusable payment request");

// Cost
const UPLOAD_COST = parseFloat(process.env.UPLOAD_COST);
const STORAGE_COST = parseFloat(process.env.STORAGE_COST);
const DOWNLOAD_COST = parseFloat(process.env.DOWNLOAD_COST);

export { MINTS, UNIT, PAYOUT, UPLOAD_COST, STORAGE_COST, DOWNLOAD_COST };
