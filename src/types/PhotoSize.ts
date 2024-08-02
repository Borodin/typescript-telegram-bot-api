/**
 * ## PhotoSize
 * This object represents one size of a photo or a file / sticker thumbnail.
 * @see https://core.telegram.org/bots/api#photosize
 */
export type PhotoSize = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
};
