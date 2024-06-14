export type PassportElementErrorDataField = {
  source: 'data';
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address';
  field_name: string;
  data_hash: string;
  message: string;
};
