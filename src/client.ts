const fetch = require('node-fetch');
import { CheckoutRequest, AddressRequest, ApiResponse } from './types';

export const sellgate = {
  baseUrl: 'https://api.sellgate.io/v1',

  /**
   * Creates a checkout session.
   *
   * @returns A URL to the checkout, a success boolean and a message.
   *
   * @example
   * const checkout = await sellgate.createCheckout({
   *  price: '99.99',
   *  crypto: [
   *    {
   *      network: 'ETH',
   *      coin: 'ETH',
   *      address: '0xB1DA646D1cD015d205a99198e809724D5C78109d',
   *    },
   *  ],
   * });
   * console.log(checkout.url)
   */
  async createCheckout(request: CheckoutRequest): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(`Failed to create checkout: ${data.message}`);
      }

      return data as ApiResponse;

    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  },

  /**
   * Creates a crypto address for payments.
   *
   * @returns A success boolean, a receive_address (address for payment), a payout_address (your address) and the webhook url.
   *
   * @example
   * const address = await sellgate.createAddress({
   *  price: '99.99',
   *  crypto: [
   *    {
   *      network: 'ETH',
   *      coin: 'ETH',
   *      address: '0xB1DA646D1cD015d205a99198e809724D5C78109d',
   *    },
   *  ],
   * });
   * console.log(address.receive_address)
   */
  async createAddress(request: AddressRequest): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/address`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(`Failed to create address: ${data.message}`);
      }

      return data as ApiResponse;

    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}