/**
 * ## PassportElementErrorReverseSide
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse
 * side of the document changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorreverseside
 */
export type PassportElementErrorReverseSide = {
  /**
   * Error source, must be reverse_side
   */
  source: 'reverse_side';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
   */
  type: 'driver_license' | 'identity_card';

  /**
   * Base64-encoded hash of the file with the reverse side of the document
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};
