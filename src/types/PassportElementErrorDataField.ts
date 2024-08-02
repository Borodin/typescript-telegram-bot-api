/**
 * ## PassportElementErrorDataField
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when
 * the field's value changes.
 * @see https://core.telegram.org/bots/api#passportelementerrordatafield
 */
export type PassportElementErrorDataField = {
  source: 'data';
  type: 'personal_details' | 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'address';
  field_name: string;
  data_hash: string;
  message: string;
};
