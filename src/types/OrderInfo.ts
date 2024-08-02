import { ShippingAddress } from './';

/**
 * ## OrderInfo
 * This object represents information about an order.
 * @see https://core.telegram.org/bots/api#orderinfo
 */
export type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address: ShippingAddress;
};
