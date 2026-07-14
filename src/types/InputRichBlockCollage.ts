import { InputRichBlock, RichBlockCaption } from './';

/**
 * ## InputRichBlockCollage
 * A collage, corresponding to the custom HTML tag <tg-collage>.
 * @see https://core.telegram.org/bots/api#inputrichblockcollage
 */
export type InputRichBlockCollage = {
  /**
   * Type of the block, always "collage"
   */
  type: 'collage';

  /**
   * Elements of the collage
   */
  blocks: InputRichBlock[];

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
