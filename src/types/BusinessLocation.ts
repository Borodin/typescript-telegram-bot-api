import { Location } from './';

/**
 * ## BusinessLocation
 * Contains information about the location of a Telegram Business account.
 * @see https://core.telegram.org/bots/api#businesslocation
 */
export type BusinessLocation = {

  /**
   * Address of the business
   */
  address: string;

  /**
   * Optional. Location of the business
   */
  location?: Location;
};
