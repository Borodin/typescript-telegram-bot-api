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
