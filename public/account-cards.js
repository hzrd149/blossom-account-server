import { html, LitElement } from "./lib/lit.min.js";

export class AccountCards extends LitElement {
  static properties = {
    accounts: { type: Array },
  };

  // Remove shadow DOM to allow Tailwind styles
  createRenderRoot() {
    return this;
  }

  // async generateQR(text) {
  //   try {
  //     return await QRCode.toDataURL(text);
  //   } catch (err) {
  //     console.error("Error generating QR code:", err);
  //     return "";
  //   }
  // }

  renderCard(service) {
    // const qrCode = await this.generateQR(service.payment);

    return html`
      <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">${service.name}</h2>
        <p class="text-gray-600 text-center mb-4">${service.description}</p>
        <p class="text-green-500 font-bold mb-2">Balance: ${service.balance} sats</p>
        <p class="text-gray-700 mb-2">Rate: ${service.rate}</p>
        <code class="text-gray-700 mb-4">${service.payment}</code>
      </div>
    `;
    // <img class="w-48 h-48 object-contain mb-4" src="${qrCode}" alt="Payment QR Code" />
  }

  render() {
    if (!this.accounts || this.accounts.length === 0) {
      return html`
        <div class="flex justify-center items-center h-64">
          <p class="text-gray-600">Loading...</p>
        </div>
      `;
    }

    return html`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        ${this.accounts.map((service) => this.renderCard(service))}
      </div>
    `;
  }
}

customElements.define("account-cards", AccountCards);
