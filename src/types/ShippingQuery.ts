import { User, ShippingAddress } from './';

/**
 * ## ShippingQuery
 * This object contains information about an incoming shipping query.
 * @see https://core.telegram.org/bots/api#shippingquery
 */
export type ShippingQuery = {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
};
