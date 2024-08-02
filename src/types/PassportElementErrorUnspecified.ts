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
  source: 'unspecified';
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
  element_hash: string;
  message: string;
};
