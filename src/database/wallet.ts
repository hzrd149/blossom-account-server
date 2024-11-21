import { CashuStorage } from "@gudnuf/cornucopia";
import { CornucopiaSqliteStore } from "@gudnuf/cornucopia-sore-better-sqlite";
import { CornucopiaKeyVLocker } from "@gudnuf/cornucopia-locker-keyv";
import { CashuMint, CashuWallet, Proof, Token } from "@cashu/cashu-ts";
import { sumProofs } from "@gudnuf/cornucopia/helpers";

import db from "./db.js";
import { MINTS, UNIT } from "../env.js";
import logger from "../logger.js";

const locker = new CornucopiaKeyVLocker();
const store = new CornucopiaSqliteStore(locker, db, "proofs", MINTS[0].mintUrl, UNIT);

class Wallet {
  log = logger.extend("Wallet");
  wallet: CashuWallet;

  constructor(
    mint: CashuMint,
    unit: string,
    private store: CashuStorage,
    options?: any,
  ) {
    this.wallet = new CashuWallet(mint, { unit, ...options });
  }

  async send(
    amount: number,
    action: (proofs: Proof[]) => Promise<void>,
    options?: Parameters<CashuWallet["send"]>[2],
  ): Promise<void> {
    await this.store.transaction({ amount }, async (proofs) => {
      this.log(`Sending ${amount} ${this.wallet.unit} locking ${proofs.length} proofs`);
      const { send, keep } = await this.wallet.send(amount, proofs, options);
      await action(send);
      return keep;
    });
  }

  async receive(token: string | Token, options?: Parameters<CashuWallet["receive"]>[1]): Promise<void> {
    const proofs = await this.wallet.receive(token, options);
    await this.store.receiveProofs(proofs);
    this.log(`Received ${sumProofs(proofs)} ${this.wallet.unit}`);
  }

  async recover() {
    await this.store.transaction({ expired: true }, async (proofs) => {
      if (proofs.length === 0) return [];

      this.log(`Attempting to recover ${proofs.length} expired proofs`);
      return await this.wallet.receive({ proofs, mint: this.wallet.mint.mintUrl });
    });
  }

  async getBalance() {
    return await this.store.getBalance();
  }
}

const wallet = new Wallet(MINTS[0], UNIT, store);

// try to recover failed transactions every 10 minutes
setInterval(() => wallet.recover(), 10 * 60_000);

export default wallet;
