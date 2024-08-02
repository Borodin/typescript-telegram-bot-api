/**
 * ## PassportElementErrorFrontSide
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorfrontside
 */
export type PassportElementErrorFrontSide = {
  source: 'front_side';
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';
  file_hash: string;
  message: string;
};
