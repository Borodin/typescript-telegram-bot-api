import { Location, RichBlockCaption } from './';

/**
 * ## InputRichBlockMap
 * A block with a map, corresponding to the custom HTML tag <tg-map>. The map's width and height must not exceed 10000
 * in total. The width and height ratio must be at most 20.
 * @see https://core.telegram.org/bots/api#inputrichblockmap
 */
export type InputRichBlockMap = {
  /**
   * Type of the block, always "map"
   */
  type: 'map';

  /**
   * Location of the center of the map
   */
  location: Location;

  /**
   * Map zoom level; 0-24
   */
  zoom: number;

  /**
   * Map width; 0-10000
   */
  width: number;

  /**
   * Map height; 0-10000
   */
  height: number;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
