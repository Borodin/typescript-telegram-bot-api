import { LocationAddress } from './';

/**
 * ## StoryAreaTypeLocation
 * Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.
 * @see https://core.telegram.org/bots/api#storyareatypelocation
 */
export type StoryAreaTypeLocation = {
  /**
   * Type of the area, always “location”
   */
  type: 'location';

  /**
   * Location latitude in degrees
   */
  latitude: number;

  /**
   * Location longitude in degrees
   */
  longitude: number;

  /**
   * Optional. Address of the location
   */
  address?: LocationAddress;
};
