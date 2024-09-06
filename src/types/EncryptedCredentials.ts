/**
 * ## EncryptedCredentials
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport
 * Documentation for a complete description of the data decryption and authentication processes.
 * @see https://core.telegram.org/bots/api#encryptedcredentials
 */
export type EncryptedCredentials = {
  /**
   * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for
   * EncryptedPassportElement decryption and authentication
   */
  data: string;

  /**
   * Base64-encoded data hash for data authentication
   */
  hash: string;

  /**
   * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
   */
  secret: string;
};
