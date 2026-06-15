import { RichText } from './';

/**
 * ## RichTextSuperscript
 * A superscript text.
 * @see https://core.telegram.org/bots/api#richtextsuperscript
 */
export type RichTextSuperscript = {
  /**
   * Type of the rich text, always "superscript"
   */
  type: 'superscript';

  /**
   * The text
   */
  text: RichText;
};
