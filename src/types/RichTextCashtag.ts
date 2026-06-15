import { RichText } from './';

/**
 * ## RichTextCashtag
 * A cashtag.
 * @see https://core.telegram.org/bots/api#richtextcashtag
 */
export type RichTextCashtag = {
  /**
   * Type of the rich text, always "cashtag"
   */
  type: 'cashtag';

  /**
   * The text
   */
  text: RichText;

  /**
   * The cashtag
   */
  cashtag: string;
};
