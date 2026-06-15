import { RichText } from './';

/**
 * ## RichTextUrl
 * A text with a link.
 * @see https://core.telegram.org/bots/api#richtexturl
 */
export type RichTextUrl = {
  /**
   * Type of the rich text, always "url"
   */
  type: 'url';

  /**
   * The text
   */
  text: RichText;

  /**
   * URL of the link
   */
  url: string;
};
