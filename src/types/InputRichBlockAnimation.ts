import { InputMediaAnimation, RichBlockCaption } from './';

/**
 * ## InputRichBlockAnimation
 * A block with an animation, corresponding to the HTML tag <video>.
 * @see https://core.telegram.org/bots/api#inputrichblockanimation
 */
export type InputRichBlockAnimation = {
  /**
   * Type of the block, always "animation"
   */
  type: 'animation';

  /**
   * The animation. Caption is ignored.
   */
  animation: InputMediaAnimation;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
