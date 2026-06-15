import { RichText } from './';

/**
 * ## RichTextStrikethrough
 * A strikethrough text.
 * @see https://core.telegram.org/bots/api#richtextstrikethrough
 */
export type RichTextStrikethrough = {
  /**
   * Type of the rich text, always "strikethrough"
   */
  type: 'strikethrough';

  /**
   * The text
   */
  text: RichText;
};
