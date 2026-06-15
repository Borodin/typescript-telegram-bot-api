import { RichText } from './';

/**
 * ## RichTextEmailAddress
 * A text with an email address.
 * @see https://core.telegram.org/bots/api#richtextemailaddress
 */
export type RichTextEmailAddress = {
  /**
   * Type of the rich text, always "email_address"
   */
  type: 'email_address';

  /**
   * The text
   */
  text: RichText;

  /**
   * The email address
   */
  email_address: string;
};
