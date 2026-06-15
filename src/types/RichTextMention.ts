import { RichText } from './';

/**
 * ## RichTextMention
 * A mention by a username.
 * @see https://core.telegram.org/bots/api#richtextmention
 */
export type RichTextMention = {
  /**
   * Type of the rich text, always "mention"
   */
  type: 'mention';

  /**
   * The text
   */
  text: RichText;

  /**
   * The username
   */
  username: string;
};
