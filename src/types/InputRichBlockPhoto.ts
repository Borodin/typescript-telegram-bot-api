import { InputMediaPhoto, RichBlockCaption } from './';

/**
 * ## InputRichBlockPhoto
 * A block with a photo, corresponding to the HTML tag <img>.
 * @see https://core.telegram.org/bots/api#inputrichblockphoto
 */
export type InputRichBlockPhoto = {
  /**
   * Type of the block, always "photo"
   */
  type: 'photo';

  /**
   * The photo. Caption is ignored.
   */
  photo: InputMediaPhoto;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
