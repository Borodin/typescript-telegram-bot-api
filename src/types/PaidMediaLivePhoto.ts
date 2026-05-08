import { LivePhoto } from './LivePhoto';

/**
 * ## PaidMediaLivePhoto
 * The paid media is a live photo.
 * @see https://core.telegram.org/bots/api#paidmedialivephoto
 */
export type PaidMediaLivePhoto = {
  /**
   * Type of the paid media, always “live_photo”
   */
  type: 'live_photo';

  /**
   * The photo
   */
  live_photo: LivePhoto;
};
