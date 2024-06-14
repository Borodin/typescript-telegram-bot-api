import { User, ShippingAddress } from './';

export type ShippingQuery = {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
};
