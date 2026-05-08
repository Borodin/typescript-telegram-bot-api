/**
 * ## InputMediaLocation
 * Represents a location to be sent.
 * @see https://core.telegram.org/bots/api#inputmedialocation
 */
export type InputMediaLocation = {
  /**
   * Type of the result, must be location
   */
  type: 'location';

  /**
   * Latitude of the location
   */
  latitude: number;

  /**
   * Longitude of the location
   */
  longitude: number;

  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;
};
