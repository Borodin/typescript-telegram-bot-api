import { RichText } from './';

/**
 * ## RichTextReference
 * A reference.
 * @see https://core.telegram.org/bots/api#richtextreference
 */
export type RichTextReference = {
  /**
   * Type of the rich text, always "reference"
   */
  type: 'reference';

  /**
   * Text of the reference
   */
  text: RichText;

  /**
   * The name of the reference
   */
  name: string;
};
