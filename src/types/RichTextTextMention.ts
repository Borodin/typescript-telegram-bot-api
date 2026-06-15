import { RichText, User } from './';

/**
 * ## RichTextTextMention
 * A mention of a Telegram user by their identifier.
 * @see https://core.telegram.org/bots/api#richtexttextmention
 */
export type RichTextTextMention = {
  /**
   * Type of the rich text, always "text_mention"
   */
  type: 'text_mention';

  /**
   * The text
   */
  text: RichText;

  /**
   * The mentioned user
   */
  user: User;
};
