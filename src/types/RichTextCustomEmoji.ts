/**
 * ## RichTextCustomEmoji
 * A custom emoji.
 * @see https://core.telegram.org/bots/api#richtextcustomemoji
 */
export type RichTextCustomEmoji = {
  /**
   * Type of the rich text, always "custom_emoji"
   */
  type: 'custom_emoji';

  /**
   * Unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker.
   */
  custom_emoji_id: string;

  /**
   * Alternative emoji for the custom emoji
   */
  alternative_text: string;
};
