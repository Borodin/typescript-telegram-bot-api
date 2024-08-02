/**
 * ## Contact
 * This object represents a phone contact.
 * @see https://core.telegram.org/bots/api#contact
 */
export type Contact = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
};
