/**
 * ## ChatPhoto
 * This object represents a chat photo.
 * @see https://core.telegram.org/bots/api#chatphoto
 */
export type ChatPhoto = {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
};
