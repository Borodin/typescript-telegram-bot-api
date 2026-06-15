import { RichBlock, RichBlockCaption } from './';

/**
 * ## RichBlockSlideshow
 * A slideshow, corresponding to the custom HTML tag <tg-slideshow>.
 * @see https://core.telegram.org/bots/api#richblockslideshow
 */
export type RichBlockSlideshow = {
  /**
   * Type of the block, always "slideshow"
   */
  type: 'slideshow';

  /**
   * Elements of the slideshow
   */
  blocks: RichBlock[];

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
