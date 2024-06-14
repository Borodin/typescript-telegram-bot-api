export type PassportElementErrorSelfie = {
  source: 'selfie';
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';
  file_hash: string;
  message: string;
};
