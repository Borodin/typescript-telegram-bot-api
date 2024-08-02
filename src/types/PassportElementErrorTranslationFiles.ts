/**
 * ## PassportElementErrorTranslationFiles
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the
 * document translation change.
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfiles
 */
export type PassportElementErrorTranslationFiles = {
  source: 'translation_files';
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
  file_hashes: string[];
  message: string;
};
