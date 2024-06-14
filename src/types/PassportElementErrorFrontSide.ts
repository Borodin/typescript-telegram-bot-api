export type PassportElementErrorFrontSide = {
  source: 'front_side';
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';
  file_hash: string;
  message: string;
};
