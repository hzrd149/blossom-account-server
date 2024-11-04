import { PaymentRequest, PaymentRequestTransportType } from "@cashu/cashu-ts";
import { Account, createAccount, getAccount } from "../database/methods.js";
import { router } from "./router.js";
import { DOWNLOAD_COST, MINTS, STORAGE_COST, UNIT, UPLOAD_COST } from "../env.js";

function createPaymentRequest(pubkey: string, account: string, host: string) {
  return new PaymentRequest(
    [{ type: PaymentRequestTransportType.POST, target: new URL("/account", host).toString() }],
    [pubkey, account].join("-"),
    undefined,
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

router.get("/account", async (ctx) => {
  if (!ctx.state.auth) return ctx.throw(401, "Auth required");
  if (ctx.state.authType !== "account") return ctx.throw(400, "Invalid auth");

  const pubkey = ctx.state.auth.pubkey;
  let account: Account | undefined;

  account = await getAccount(pubkey);
  if (!account) {
    await createAccount(pubkey);
    account = await getAccount(pubkey);
  }

  if (!account) return ctx.throw(404, "Missing account");

  ctx.status = 200;
  const accounts: ApiAccount[] = [];

  if (UPLOAD_COST > 0)
    accounts.push({
      name: "Upload",
      description: "This is used for uploaded",
      rate: `${UPLOAD_COST}${UNIT}/Gb`,
      balance: account.upload / 1000,
      payment: createPaymentRequest(pubkey, "upload", ctx.href),
    });

  if (STORAGE_COST > 0)
    accounts.push({
      name: "Storage",
      description: "This is used to store your blobs",
      rate: `${STORAGE_COST}${UNIT}/Gb/Month`,
      balance: account.storage / 1000,
      payment: createPaymentRequest(pubkey, "storage", ctx.href),
    });

  if (DOWNLOAD_COST > 0)
    accounts.push({
      name: "Distribution",
      description: "This is used when others download your blobs",
      rate: `${DOWNLOAD_COST}${UNIT}/Gb`,
      balance: account.download / 1000,
      payment: createPaymentRequest(pubkey, "download", ctx.href),
    });

  ctx.body = accounts;
});
``;
