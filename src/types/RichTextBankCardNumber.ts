import { RichText } from './';

/**
 * ## RichTextBankCardNumber
 * A text with a bank card number.
 * @see https://core.telegram.org/bots/api#richtextbankcardnumber
 */
export type RichTextBankCardNumber = {
  /**
   * Type of the rich text, always "bank_card_number"
   */
  type: 'bank_card_number';

  /**
   * The text
   */
  text: RichText;

  /**
   * The bank card number
   */
  bank_card_number: string;
};
