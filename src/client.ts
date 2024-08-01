const fetch = require('node-fetch');
import { CheckoutRequest, AddressRequest, ApiResponse } from './types';

export class sellgate {
  private static readonly baseUrl: string = 'https://api.sellgate.io/v1';

  static async createCheckout(request: CheckoutRequest): Promise<ApiResponse> {
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
  }

  static async createAddress(request: AddressRequest): Promise<ApiResponse> {
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