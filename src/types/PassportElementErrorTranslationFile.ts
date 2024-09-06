/**
 * ## PassportElementErrorTranslationFile
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered
 * resolved when the file changes.
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfile
 */
export type PassportElementErrorTranslationFile = {

  /**
   * Error source, must be translation_file
   */
  source: 'translation_file';

  /**
   * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”,
   * “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”,
   * “passport_registration”, “temporary_registration”
   */
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

  /**
   * Base64-encoded file hash
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};
