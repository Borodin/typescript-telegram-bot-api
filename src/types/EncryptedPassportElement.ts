/**
 *
 */
type PassportFile = {
  /**
   *
   */
  file_id: string;

  /**
   *
   */
  file_size: number;

  /**
   *
   */
  file_date: number;
};

/**
 *
 */
type BaseEncryptedPassportElement = {
  /**
   *
   */
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

  /**
   *
   */
  hash: string;
};

/**
 *
 */
type PersonalDetailsElement = {
  /**
   *
   */
  type: 'personal_details';

  /**
   *
   */
  data?: string;
} & BaseEncryptedPassportElement;

/**
 *
 */
type PassportElement = {
  /**
   *
   */
  type: 'passport';

  /**
   *
   */
  data?: string;

  /**
   *
   */
  front_side?: PassportFile;

  /**
   *
   */
  selfie?: PassportFile;

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type DriverLicenseElement = {
  /**
   *
   */
  type: 'driver_license';

  /**
   *
   */
  data?: string;

  /**
   *
   */
  front_side?: PassportFile;

  /**
   *
   */
  reverse_side?: PassportFile;

  /**
   *
   */
  selfie?: PassportFile;

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type IdentityCardElement = {
  /**
   *
   */
  type: 'identity_card';

  /**
   *
   */
  data?: string;

  /**
   *
   */
  front_side?: PassportFile;

  /**
   *
   */
  reverse_side?: PassportFile;

  /**
   *
   */
  selfie?: PassportFile;

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type InternalPassportElement = {
  /**
   *
   */
  type: 'internal_passport';

  /**
   *
   */
  data?: string;

  /**
   *
   */
  front_side?: PassportFile;

  /**
   *
   */
  selfie?: PassportFile;

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type AddressElement = {
  /**
   *
   */
  type: 'address';

  /**
   *
   */
  data?: string;
} & BaseEncryptedPassportElement;

/**
 *
 */
type UtilityBillElement = {
  /**
   *
   */
  type: 'utility_bill';

  /**
   *
   */
  files?: PassportFile[];

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type BankStatementElement = {
  /**
   *
   */
  type: 'bank_statement';

  /**
   *
   */
  files?: PassportFile[];

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type RentalAgreementElement = {
  /**
   *
   */
  type: 'rental_agreement';

  /**
   *
   */
  files?: PassportFile[];

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type PassportRegistrationElement = {
  /**
   *
   */
  type: 'passport_registration';

  /**
   *
   */
  files?: PassportFile[];

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type TemporaryRegistrationElement = {
  /**
   *
   */
  type: 'temporary_registration';

  /**
   *
   */
  files?: PassportFile[];

  /**
   *
   */
  translation?: PassportFile[];
} & BaseEncryptedPassportElement;

/**
 *
 */
type PhoneNumberElement = {
  /**
   *
   */
  type: 'phone_number';

  /**
   *
   */
  phone_number?: string;
} & BaseEncryptedPassportElement;

/**
 *
 */
type EmailElement = {
  /**
   *
   */
  type: 'email';

  /**
   *
   */
  email?: string;
} & BaseEncryptedPassportElement;

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
