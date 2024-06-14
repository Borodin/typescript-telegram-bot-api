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
