export type PassportElementErrorReverseSide = {
  source: 'reverse_side';
  type: 'driver_license' | 'identity_card';
  file_hash: string;
  message: string;
};
