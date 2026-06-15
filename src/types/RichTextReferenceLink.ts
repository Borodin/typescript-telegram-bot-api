import { RichText } from './';

/**
 * ## RichTextReferenceLink
 * A link to a reference.
 * @see https://core.telegram.org/bots/api#richtextreferencelink
 */
export type RichTextReferenceLink = {
  /**
   * Type of the rich text, always "reference_link"
   */
  type: 'reference_link';

  /**
   * The link text
   */
  text: RichText;

  /**
   * The name of the reference
   */
  reference_name: string;
};
