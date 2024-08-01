import { sellgate } from './client';
import { CheckoutRequest, AddressRequest } from './types';

describe('SellgateClient', () => {
  it('should create a checkout', async () => {
    const request: CheckoutRequest = {
      title: 'Premium Subscription',
      description: '1-year access to all premium features',
      currency: 'USD',
      price: '99.99',
      crypto: [
        {
          network: 'ETH',
          coin: 'ETH',
          address: '0xB1DA646D1cD015d205a99198e809724D5C78109d',
        },
      ],
      webhook: 'https://example.com/webhook',
      return: 'https://example.com/thank-you',
    };

    const response = await sellgate.createCheckout(request);
    expect(response.success).toBe(true);
  });

  it('should create an address', async () => {
    const request: AddressRequest = {
      crypto: {
        network: 'ETH',
        coin: 'ETH',
        address: '0xB1DA646D1cD015d205a99198e809724D5C78109d',
      },
      webhook: 'https://example.com/webhook',
    };

    const response = await sellgate.createAddress(request);
    expect(response.success).toBe(true);
  });
});