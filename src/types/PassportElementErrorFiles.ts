/**
 * ## PassportElementErrorFiles
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorfiles
 */
export type PassportElementErrorFiles = {
  source: 'files';
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';
  file_hashes: string[];
  message: string;
};
