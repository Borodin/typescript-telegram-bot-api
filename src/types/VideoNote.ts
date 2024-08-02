import { PhotoSize } from './';

/**
 * ## VideoNote
 * This object represents a video message (available in Telegram apps as of v.4.0).
 * @see https://core.telegram.org/bots/api#videonote
 */
export type VideoNote = {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_size?: number;
};
