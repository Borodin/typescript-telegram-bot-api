/**
 * ## PassportElementErrorSelfie
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie
 * changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorselfie
 */
export type PassportElementErrorSelfie = {
  source: 'selfie';
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';
  file_hash: string;
  message: string;
};
