import { RichText } from './';

/**
 * ## RichTextPhoneNumber
 * A text with a phone number.
 * @see https://core.telegram.org/bots/api#richtextphonenumber
 */
export type RichTextPhoneNumber = {
  /**
   * Type of the rich text, always "phone_number"
   */
  type: 'phone_number';

  /**
   * The text
   */
  text: RichText;

  /**
   * The phone number
   */
  phone_number: string;
};
