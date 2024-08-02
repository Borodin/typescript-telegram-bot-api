import { PhotoSize } from './';

/**
 * ## Video
 * This object represents a video file.
 * @see https://core.telegram.org/bots/api#video
 */
export type Video = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};
