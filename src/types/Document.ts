import { PhotoSize } from './';

/**
 * ## Document
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 * @see https://core.telegram.org/bots/api#document
 */
export type Document = {
  file_id: string;
  file_unique_id: string;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};
