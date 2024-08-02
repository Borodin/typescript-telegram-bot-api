/**
 * ## PassportFile
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format
 * when decrypted and don't exceed 10MB.
 * @see https://core.telegram.org/bots/api#passportfile
 */
export type PassportFile = {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  file_date: number;
};
