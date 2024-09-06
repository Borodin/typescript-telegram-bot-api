import { User, ShippingAddress } from './';

/**
 * ## ShippingQuery
 * This object contains information about an incoming shipping query.
 * @see https://core.telegram.org/bots/api#shippingquery
 */
export type ShippingQuery = {
  /**
   * Unique query identifier
   */
  id: string;

  /**
   * User who sent the query
   */
  from: User;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * User specified shipping address
   */
  shipping_address: ShippingAddress;
};
