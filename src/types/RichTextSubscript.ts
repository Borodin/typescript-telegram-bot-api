import { RichText } from './';

/**
 * ## RichTextSubscript
 * A subscript text.
 * @see https://core.telegram.org/bots/api#richtextsubscript
 */
export type RichTextSubscript = {
  /**
   * Type of the rich text, always "subscript"
   */
  type: 'subscript';

  /**
   * The text
   */
  text: RichText;
};
