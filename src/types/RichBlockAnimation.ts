import { Animation, RichBlockCaption } from './';

/**
 * ## RichBlockAnimation
 * A block with an animation, corresponding to the HTML tag <video>.
 * @see https://core.telegram.org/bots/api#richblockanimation
 */
export type RichBlockAnimation = {
  /**
   * Type of the block, always "animation"
   */
  type: 'animation';

  /**
   * The animation
   */
  animation: Animation;

  /**
   * Optional. True, if the media preview is covered by a spoiler animation
   */
  has_spoiler?: true;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
