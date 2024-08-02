/**
 * ## PassportElementErrorReverseSide
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse
 * side of the document changes.
 * @see https://core.telegram.org/bots/api#passportelementerrorreverseside
 */
export type PassportElementErrorReverseSide = {
  source: 'reverse_side';
  type: 'driver_license' | 'identity_card';
  file_hash: string;
  message: string;
};
