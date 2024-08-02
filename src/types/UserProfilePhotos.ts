import { PhotoSize } from './';

/**
 * ## UserProfilePhotos
 * This object represent a user's profile pictures.
 * @see https://core.telegram.org/bots/api#userprofilephotos
 */
export type UserProfilePhotos = {
  total_count: number;
  photos: PhotoSize[][];
};
