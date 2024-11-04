import { html, LitElement } from "./lib/lit.min.js";
import { unixNow, newExpirationValue } from "./utils.js";

export class AccountPage extends LitElement {
  static properties = {
    status: { state: true, type: String },
    accounts: { state: true, type: Array },
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.update();
  }

  async update() {
    try {
      this.status = "Requesting signature...";
      const auth = await window.nostr.signEvent({
        kind: 24242,
        content: "Check account",
        tags: [
          ["t", "account"],
          ["expiration", newExpirationValue()],
        ],
        created_at: unixNow(),
      });

      this.status = "Loading...";
      const authorization = "Nostr " + btoa(JSON.stringify(auth));
      const res = await fetch("/account", { headers: { authorization } });

      if (!res.ok) throw new Error(res.headers.get("x-reason") || "Upload Rejected");

      this.accounts = await res.json();
      console.log(this.accounts);
    } catch (error) {
      alert(error.message);
      this.status = "";
    }
  }

  render() {
    return html`<div class="w-full px-10 pt-10 pb-6 bg-white rounded-xl flex flex-col">
      <div class="text-center">
        <h1 class="mt-2 text-3xl font-bold text-gray-900">🌸 Blossom Server</h1>
        <p class="mt-2 text-sm text-gray-400">Blobs stored simply on mediaservers</p>
        <a class="text-sm text-blue-400" href="https://github.com/hzrd149/blossom-account-server">Github</a>
      </div>
      <pre>${JSON.stringify(this.accounts, null, 2)}</pre>
    </div>`;
  }
}
customElements.define("account-page", AccountPage);
