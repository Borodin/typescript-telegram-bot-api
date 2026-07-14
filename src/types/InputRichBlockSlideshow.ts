import { InputRichBlock, RichBlockCaption } from './';

/**
 * ## InputRichBlockSlideshow
 * A slideshow, corresponding to the custom HTML tag <tg-slideshow>.
 * @see https://core.telegram.org/bots/api#inputrichblockslideshow
 */
export type InputRichBlockSlideshow = {
  /**
   * Type of the block, always "slideshow"
   */
  type: 'slideshow';

  /**
   * Elements of the slideshow
   */
  blocks: InputRichBlock[];

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
