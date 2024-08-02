import { Location } from './';

/**
 * ## Venue
 * This object represents a venue.
 * @see https://core.telegram.org/bots/api#venue
 */
export type Venue = {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
};
