/**
 * ## EncryptedCredentials
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport
 * Documentation for a complete description of the data decryption and authentication processes.
 * @see https://core.telegram.org/bots/api#encryptedcredentials
 */
export type EncryptedCredentials = {
  data: string;
  hash: string;
  secret: string;
};
