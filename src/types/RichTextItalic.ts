import { RichText } from './';

/**
 * ## RichTextItalic
 * An italicized text.
 * @see https://core.telegram.org/bots/api#richtextitalic
 */
export type RichTextItalic = {
  /**
   * Type of the rich text, always "italic"
   */
  type: 'italic';

  /**
   * The text
   */
  text: RichText;
};
