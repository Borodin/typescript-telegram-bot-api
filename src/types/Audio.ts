import { PhotoSize } from './';

/**
 * ## Audio
 * This object represents an audio file to be treated as music by the Telegram clients.
 * @see https://core.telegram.org/bots/api#audio
 */
export type Audio = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumb?: PhotoSize;
};
