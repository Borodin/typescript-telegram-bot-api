import { Location, RichBlockCaption } from './';

/**
 * ## RichBlockMap
 * A block with a map, corresponding to the custom HTML tag <tg-map>.
 * @see https://core.telegram.org/bots/api#richblockmap
 */
export type RichBlockMap = {
  /**
   * Type of the block, always "map"
   */
  type: 'map';

  /**
   * Location of the center of the map
   */
  location: Location;

  /**
   * Map zoom level; 13-20
   */
  zoom: number;

  /**
   * Expected width of the map
   */
  width: number;

  /**
   * Expected height of the map
   */
  height: number;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
