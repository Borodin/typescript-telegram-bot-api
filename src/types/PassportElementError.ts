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
