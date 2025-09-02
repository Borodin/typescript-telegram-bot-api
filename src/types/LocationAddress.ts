/**
 * ## LocationAddress
 * Describes the physical address of a location.
 * @see https://core.telegram.org/bots/api#locationaddress
 */
export type LocationAddress = {
  /**
   * The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located
   */
  country_code: string;

  /**
   * Optional. State of the location
   */
  state?: string;

  /**
   * Optional. City of the location
   */
  city?: string;

  /**
   * Optional. Street address of the location
   */
  street?: string;
};
