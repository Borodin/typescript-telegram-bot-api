import {
  PassportElementErrorDataField,
  PassportElementErrorUnspecified,
  PassportElementErrorTranslationFiles,
  PassportElementErrorTranslationFile,
  PassportElementErrorFiles,
  PassportElementErrorFile,
  PassportElementErrorSelfie,
  PassportElementErrorReverseSide,
  PassportElementErrorFrontSide,
} from './';

/**
 * ## PassportElementError
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 * - PassportElementErrorDataField
 * - PassportElementErrorFrontSide
 * - PassportElementErrorReverseSide
 * - PassportElementErrorSelfie
 * - PassportElementErrorFile
 * - PassportElementErrorFiles
 * - PassportElementErrorTranslationFile
 * - PassportElementErrorTranslationFiles
 * - PassportElementErrorUnspecified
 * @see https://core.telegram.org/bots/api#passportelementerror
 */
export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;
