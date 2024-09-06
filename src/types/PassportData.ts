import { EncryptedPassportElement, EncryptedCredentials } from './';

/**
 * ## PassportData
 * Describes Telegram Passport data shared with the bot by the user.
 * @see https://core.telegram.org/bots/api#passportdata
 */
export type PassportData = {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  data: EncryptedPassportElement[];

  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: EncryptedCredentials;
};
