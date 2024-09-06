import { Location } from './';

/**
 * ## Venue
 * This object represents a venue.
 * @see https://core.telegram.org/bots/api#venue
 */
export type Venue = {

  /**
   * Venue location. Can't be a live location
   */
  location: Location;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Optional. Foursquare identifier of the venue
   */
  foursquare_id?: string;

  /**
   * Optional. Foursquare identifier of the venue
   */
  foursquare_type?: string;

  /**
   * Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium”
   * or “food/icecream”.)
   */
  google_place_id?: string;

  /**
   * Optional. Google Places identifier of the venue
   */
  google_place_type?: string;

  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
};
