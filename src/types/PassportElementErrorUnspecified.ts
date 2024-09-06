import {
  PassportElementErrorDataField,
  PassportElementErrorTranslationFiles,
  PassportElementErrorTranslationFile,
  PassportElementErrorFiles,
  PassportElementErrorFile,
  PassportElementErrorSelfie,
  PassportElementErrorReverseSide,
  PassportElementErrorFrontSide,
} from './';

/**
 * ## PassportElementErrorUnspecified
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 * @see https://core.telegram.org/bots/api#passportelementerrorunspecified
 */
export type PassportElementErrorUnspecified = {

  /**
   * Error source, must be unspecified
   */
  source: 'unspecified';

  /**
   * Type of element of the user's Telegram Passport which has the issue
   */
  type: Extract<
    (
      | PassportElementErrorDataField
      | PassportElementErrorFrontSide
      | PassportElementErrorReverseSide
      | PassportElementErrorSelfie
      | PassportElementErrorFile
      | PassportElementErrorFiles
      | PassportElementErrorTranslationFile
      | PassportElementErrorTranslationFiles
    )['type'],
    string
  >;

  /**
   * Base64-encoded element hash
   */
  element_hash: string;

  /**
   * Error message
   */
  message: string;
};
