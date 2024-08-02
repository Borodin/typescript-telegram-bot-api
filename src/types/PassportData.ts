import { EncryptedPassportElement, EncryptedCredentials } from './';

/**
 * ## PassportData
 * Describes Telegram Passport data shared with the bot by the user.
 * @see https://core.telegram.org/bots/api#passportdata
 */
export type PassportData = {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
};
