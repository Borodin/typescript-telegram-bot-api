/**
 * ## File
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 * > The maximum file size to download is 20 MB
 * @see https://core.telegram.org/bots/api#file
 */
export type File = {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
};
