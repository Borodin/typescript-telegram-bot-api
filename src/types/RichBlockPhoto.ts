import { PhotoSize, RichBlockCaption } from './';

/**
 * ## RichBlockPhoto
 * A block with a photo, corresponding to the HTML tag <photo>.
 * @see https://core.telegram.org/bots/api#richblockphoto
 */
export type RichBlockPhoto = {
  /**
   * Type of the block, always "photo"
   */
  type: 'photo';

  /**
   * Available sizes of the photo
   */
  photo: PhotoSize[];

  /**
   * Optional. True, if the media preview is covered by a spoiler animation
   */
  has_spoiler?: true;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
