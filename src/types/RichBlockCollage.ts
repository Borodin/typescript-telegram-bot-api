import { RichBlock, RichBlockCaption } from './';

/**
 * ## RichBlockCollage
 * A collage, corresponding to the custom HTML tag <tg-collage>.
 * @see https://core.telegram.org/bots/api#richblockcollage
 */
export type RichBlockCollage = {
  /**
   * Type of the block, always "collage"
   */
  type: 'collage';

  /**
   * Elements of the collage
   */
  blocks: RichBlock[];

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
