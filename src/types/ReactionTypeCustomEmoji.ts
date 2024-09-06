/**
 * ## ReactionTypeCustomEmoji
 * The reaction is based on a custom emoji.
 * #see https://core.telegram.org/bots/api#reactiontypecustomemoji
 */
export type ReactionTypeCustomEmoji = {

  /**
   * Type of the reaction, always “custom_emoji”
   */
  type: 'custom_emoji';

  /**
   * Custom emoji identifier
   */
  custom_emoji_id: string;
};
