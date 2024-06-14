import { EncryptedPassportElement, EncryptedCredentials } from './';

export type PassportData = {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
};
