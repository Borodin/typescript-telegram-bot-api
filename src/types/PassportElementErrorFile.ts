/**
 * ## PassportElementErrorFile
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan
 * changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorfile
 */
export type PassportElementErrorFile = {
  source: 'file';
  type: 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration';
  file_hash: string;
  message: string;
};
