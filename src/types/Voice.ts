/**
 * ## Voice
 * This object represents a voice note.
 * @see https://core.telegram.org/bots/api#voice
 */
export type Voice = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
};
