import { Location } from './';

/**
 * ## BusinessLocation
 * Contains information about the location of a Telegram Business account.
 * @see https://core.telegram.org/bots/api#businesslocation
 */
export type BusinessLocation = {
  address: string;
  location?: Location;
};
