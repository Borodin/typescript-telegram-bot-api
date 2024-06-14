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
