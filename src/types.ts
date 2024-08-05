export interface CryptoInfo {
  network: string;
  coin: string;
  address: string;
}

export interface CheckoutRequest {
  title?: string;
  description?: string;
  currency?: string;
  price: string;
  crypto: CryptoInfo[];
  webhook?: string;
  return?: string;
}

export interface AddressRequest {
  crypto: CryptoInfo;
  webhook: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  url: string;
  receive_address: string;
  payout_address: string;
  webhook: string;
  data: any;
}