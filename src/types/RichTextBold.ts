import { RichText } from './';

/**
 * ## RichTextBold
 * A bold text.
 * @see https://core.telegram.org/bots/api#richtextbold
 */
export type RichTextBold = {
  /**
   * Type of the rich text, always "bold"
   */
  type: 'bold';

  /**
   * The text
   */
  text: RichText;
};
