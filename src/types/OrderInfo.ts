import { ShippingAddress } from './';

export type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address: ShippingAddress;
};
