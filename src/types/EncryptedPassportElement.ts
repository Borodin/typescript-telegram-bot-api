interface PassportFile {
  file_id: string;
  file_size: number;
  file_date: number;
}

interface BaseEncryptedPassportElement {
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
    | 'phone_number'
    | 'email';
  hash: string;
}

interface PersonalDetailsElement extends BaseEncryptedPassportElement {
  type: 'personal_details';
  data?: string;
}

interface PassportElement extends BaseEncryptedPassportElement {
  type: 'passport';
  data?: string;
  front_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
}

interface DriverLicenseElement extends BaseEncryptedPassportElement {
  type: 'driver_license';
  data?: string;
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
}

interface IdentityCardElement extends BaseEncryptedPassportElement {
  type: 'identity_card';
  data?: string;
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
}

interface InternalPassportElement extends BaseEncryptedPassportElement {
  type: 'internal_passport';
  data?: string;
  front_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
}

interface AddressElement extends BaseEncryptedPassportElement {
  type: 'address';
  data?: string;
}

interface UtilityBillElement extends BaseEncryptedPassportElement {
  type: 'utility_bill';
  files?: PassportFile[];
  translation?: PassportFile[];
}

interface BankStatementElement extends BaseEncryptedPassportElement {
  type: 'bank_statement';
  files?: PassportFile[];
  translation?: PassportFile[];
}

interface RentalAgreementElement extends BaseEncryptedPassportElement {
  type: 'rental_agreement';
  files?: PassportFile[];
  translation?: PassportFile[];
}

interface PassportRegistrationElement extends BaseEncryptedPassportElement {
  type: 'passport_registration';
  files?: PassportFile[];
  translation?: PassportFile[];
}

interface TemporaryRegistrationElement extends BaseEncryptedPassportElement {
  type: 'temporary_registration';
  files?: PassportFile[];
  translation?: PassportFile[];
}

interface PhoneNumberElement extends BaseEncryptedPassportElement {
  type: 'phone_number';
  phone_number?: string;
}

interface EmailElement extends BaseEncryptedPassportElement {
  type: 'email';
  email?: string;
}

/**
 * ## EncryptedPassportElement
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 * @see https://core.telegram.org/bots/api#encryptedpassportelement
 */
export type EncryptedPassportElement =
  | PersonalDetailsElement
  | PassportElement
  | DriverLicenseElement
  | IdentityCardElement
  | InternalPassportElement
  | AddressElement
  | UtilityBillElement
  | BankStatementElement
  | RentalAgreementElement
  | PassportRegistrationElement
  | TemporaryRegistrationElement
  | PhoneNumberElement
  | EmailElement;
