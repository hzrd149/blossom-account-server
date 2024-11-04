import { NostrEvent } from "nostr-tools";
import { nanoid } from "nanoid";

import db from "./db.js";
import { BlobMetadata } from "blossom-server-sdk";

export async function addToken(token: { id: string; event: NostrEvent; expiration: number; type: string }) {
  db.prepare(`INSERT INTO tokens (id, pubkey, type, expiration, event) VALUES (?, ?, ?, ?, ?)`).run(
    token.id,
    token.event.pubkey,
    token.type,
    token.expiration,
    JSON.stringify(token.event),
  );
}
export function hasUsedToken(token: string) {
  return !!db.prepare(`SELECT * FROM tokens WHERE id = ?`).get(token);
}

export function getAllBlobAndOwners() {
  return db
    .prepare<[], BlobMetadata & { owners: string }>(
      `SELECT blobs.*, group_concat(owners.pubkey) as owners FROM blobs INNER JOIN owners ON owners.blob = blobs.sha256 GROUP BY blobs.sha256`,
    )
    .all()
    .map((row) => ({ ...row, owners: row.owners.split(",") }));
}

export type AccountType = "upload" | "download" | "storage";
export type Account = {
  pubkey: string;
  payment: string;
  upload: number;
  storage: number;
  download: number;
};

export function getAccount(id: string) {
  return db.prepare<string, Account>(`SELECT * FROM accounts WHERE id = ?`).get(id);
}
export function getAccountFromPubkey(pubkey: string) {
  return db.prepare<string, Account>(`SELECT * FROM accounts WHERE pubkey = ?`).get(pubkey);
}

export function createAccount(pubkey: string) {
  const payment = nanoid(16);
  db.prepare<[string, string]>(`INSERT INTO accounts (pubkey, payment) VALUES (?, ?)`).run(pubkey, payment);
}

export function checkAccount(pubkey: string, type: AccountType) {
  const account = getAccountFromPubkey(pubkey);
  if (!account) return false;
  return account[type] > 0;
}

/** @param amount amount in msats */
export function topupAccount(pubkey: string, type: AccountType, amount: number) {
  db.prepare<[number, string]>(`UPDATE accounts SET ${type} = ${type} + ? WHERE pubkey = ?`).run(amount, pubkey);
}

/** @param amount amount in msats */
export function deductAccount(pubkey: string, type: AccountType, amount: number) {
  db.prepare<[number, string]>(`UPDATE accounts SET ${type} = MAX(${type} - ?, 0) WHERE pubkey = ?`).run(
    amount,
    pubkey,
  );
}
