import { html, LitElement } from "./lib/lit.min.js";
import { unixNow, newExpirationValue } from "./utils.js";
import "./account-cards.js";

export class AccountPage extends LitElement {
  static properties = {
    status: { state: true, type: String },
    auth: { state: true, type: Object },
    accounts: { state: true, type: Array },
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.getAuth().then(() => this.fetchAccounts());
  }

  async getAuth() {
    try {
      this.status = "Requesting signature...";
      this.auth = await window.nostr.signEvent({
        kind: 24242,
        content: "Check account",
        tags: [
          ["t", "account"],
          ["expiration", newExpirationValue()],
        ],
        created_at: unixNow(),
      });
    } catch (error) {
      alert(error.message);
      this.status = "";
    }
  }

  async fetchAccounts() {
    try {
      this.status = "Loading...";
      const authorization = "Nostr " + btoa(JSON.stringify(this.auth));
      const res = await fetch("/account", { headers: { authorization } });

      if (!res.ok) throw new Error(res.headers.get("x-reason") || "Failed to get account details");

      this.accounts = await res.json();
      console.log(this.accounts);
    } catch (error) {
      alert(error.message);
      this.status = "";
    }
  }

  render() {
    return html`<div class="w-full bg-white rounded-xl flex flex-col">
      <account-cards .accounts=${this.accounts}></account-cards>
    </div>`;
  }
}
customElements.define("account-page", AccountPage);
