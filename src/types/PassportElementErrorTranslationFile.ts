/**
 * ## PassportElementErrorTranslationFile
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfile
 */
export type PassportElementErrorTranslationFile = {
  source: 'translation_file';
  type:
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';
  file_hash: string;
  message: string;
};
