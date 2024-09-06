import { PhotoSize } from './';

/**
 * ## UserProfilePhotos
 * This object represent a user's profile pictures.
 * @see https://core.telegram.org/bots/api#userprofilephotos
 */
export type UserProfilePhotos = {

  /**
   * Total number of profile pictures the target user has
   */
  total_count: number;

  /**
   * Requested profile pictures (in up to 4 sizes each)
   */
  photos: PhotoSize[][];
};
