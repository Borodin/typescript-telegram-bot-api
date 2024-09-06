/**
 * ## ShippingAddress
 * This object represents a shipping address.
 * @see https://core.telegram.org/bots/api#shippingaddress
 */
export type ShippingAddress = {
  /**
   * Two-letter ISO 3166-1 alpha-2 country code
   */
  country_code: string;

  /**
   * State, if applicable
   */
  state: string;

  /**
   * City
   */
  city: string;

  /**
   * First line for the address
   */
  street_line1: string;

  /**
   * Second line for the address
   */
  street_line2: string;

  /**
   * Address post code
   */
  post_code: string;
};
