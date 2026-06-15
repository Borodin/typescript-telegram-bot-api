import { RichText } from './';

/**
 * ## RichTextCode
 * A monowidth text.
 * @see https://core.telegram.org/bots/api#richtextcode
 */
export type RichTextCode = {
  /**
   * Type of the rich text, always "code"
   */
  type: 'code';

  /**
   * The text
   */
  text: RichText;
};
