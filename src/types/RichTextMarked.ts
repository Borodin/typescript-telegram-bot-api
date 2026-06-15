import { RichText } from './';

/**
 * ## RichTextMarked
 * A marked text.
 * @see https://core.telegram.org/bots/api#richtextmarked
 */
export type RichTextMarked = {
  /**
   * Type of the rich text, always "marked"
   */
  type: 'marked';

  /**
   * The text
   */
  text: RichText;
};
