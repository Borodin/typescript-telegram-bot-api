import { RichText } from './';

/**
 * ## RichTextUnderline
 * An underlined text.
 * @see https://core.telegram.org/bots/api#richtextunderline
 */
export type RichTextUnderline = {
  /**
   * Type of the rich text, always "underline"
   */
  type: 'underline';

  /**
   * The text
   */
  text: RichText;
};
