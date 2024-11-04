import { PaymentRequest, PaymentRequestPayload, PaymentRequestTransportType } from "@cashu/cashu-ts";
import { npubEncode } from "nostr-tools/nip19";
import { koaBody } from "koa-body";

import {
  Account,
  AccountType,
  createAccount,
  getAccount,
  getAccountFromPubkey,
  topupAccount,
} from "../database/methods.js";
import { router } from "./router.js";
import { DOWNLOAD_COST, MINTS, STORAGE_COST, UNIT, UPLOAD_COST } from "../env.js";
import logger from "../logger.js";

const log = logger.extend("Account");

function createPaymentRequest(pubkey: string, account: string, host: string, amount?: number) {
  return new PaymentRequest(
    [{ type: PaymentRequestTransportType.POST, target: new URL("/account", host).toString() }],
    [pubkey, account].join("-"),
    amount,
    UNIT,
    MINTS.map((mint) => mint.mintUrl),
    account,
    false,
  ).toEncodedRequest();
}

type ApiAccount = {
  name: string;
  description: string;
  rate: string;
  balance: number;
  payment: string;
};

// get account
router.get("/account", async (ctx) => {
  if (!ctx.state.auth) return ctx.throw(401, "Auth required");
  if (ctx.state.authType !== "account") return ctx.throw(400, "Invalid auth");

  const pubkey = ctx.state.auth.pubkey;
  let account: Account | undefined;

  account = await getAccountFromPubkey(pubkey);
  if (!account) {
    await createAccount(pubkey);
    account = await getAccountFromPubkey(pubkey);
  }

  if (!account) return ctx.throw(404, "Missing account");

  ctx.status = 200;
  const accounts: ApiAccount[] = [];

  if (UPLOAD_COST > 0)
    accounts.push({
      name: "Upload",
      description: "Used for uploaded",
      rate: `${UPLOAD_COST}${UNIT}/Gb`,
      balance: account.upload / 1000,
      payment: createPaymentRequest(pubkey, "upload", ctx.href, Math.round(UPLOAD_COST * 10)),
    });

  if (STORAGE_COST > 0)
    accounts.push({
      name: "Storage",
      description: "Used to store your blobs",
      rate: `${STORAGE_COST}${UNIT}/Gb/Month`,
      balance: account.storage / 1000,
      payment: createPaymentRequest(pubkey, "storage", ctx.href, Math.round(STORAGE_COST * 10)),
    });

  if (DOWNLOAD_COST > 0)
    accounts.push({
      name: "Distribution",
      description: "Used when others download your blobs",
      rate: `${DOWNLOAD_COST}${UNIT}/Gb`,
      balance: account.download / 1000,
      payment: createPaymentRequest(pubkey, "download", ctx.href, Math.round(DOWNLOAD_COST * 10)),
    });

  ctx.body = accounts;
});

// topup account
router.post("/account", koaBody(), async (ctx) => {
  const payment = ctx.body as PaymentRequestPayload;
  if (!payment.id) return ctx.throw(400, "Missing payment id");
  if (payment.unit !== UNIT) return ctx.throw(400, "Incorrect unit");

  const mint = MINTS.find((m) => m.mintUrl === payment.mint);
  if (!mint) return ctx.throw(400, "Unacceptable mint");

  const [id, type] = payment.id.split("-");
  if (!id || !type) return ctx.throw(400, "Invalid payment id");

  // ensure payment type
  if (["upload", "download", "storage"].includes(type)) return ctx.throw(400, "Invalid payment type");

  const account = await getAccount(id);
  if (!account) return ctx.throw(400, "Missing account");

  const total = payment.proofs.reduce((t, p) => t + p.amount, 0);
  log(`Adding ${total}${UNIT} from ${payment.mint} to ${npubEncode(account.pubkey)} ${type} account`);
  topupAccount(account.pubkey, type as AccountType, total);

  ctx.status = 200;
});
