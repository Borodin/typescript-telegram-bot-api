/**
 * ## ShippingAddress
 * This object represents a shipping address.
 * @see https://core.telegram.org/bots/api#shippingaddress
 */
export type ShippingAddress = {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};
