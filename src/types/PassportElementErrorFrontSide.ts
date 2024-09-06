/**
 * ## PassportElementErrorFrontSide
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front
 * side of the document changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorfrontside
 */
export type PassportElementErrorFrontSide = {

  /**
   * Error source, must be front_side
   */
  source: 'front_side';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”,
   * “identity_card”, “internal_passport”
   */
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';

  /**
   * Base64-encoded hash of the file with the front side of the document
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};
