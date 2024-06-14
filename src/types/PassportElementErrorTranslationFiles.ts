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
