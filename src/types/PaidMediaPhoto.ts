import { PhotoSize } from './PhotoSize';

/**
 * ## PaidMediaPhoto
 * The paid media is a photo.
 * @see https://core.telegram.org/bots/api#paidmediaphoto
 */
export type PaidMediaPhoto = {
  /**
   * Type of the paid media, always “photo”
   */
  type: 'photo';

  /**
   * The photo
   */
  photo: PhotoSize[];
};
