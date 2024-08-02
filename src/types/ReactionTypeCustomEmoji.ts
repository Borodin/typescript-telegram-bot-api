/**
 * ## ReactionTypeCustomEmoji
 * The reaction is based on a custom emoji.
 * #see https://core.telegram.org/bots/api#reactiontypecustomemoji
 */
export type ReactionTypeCustomEmoji = {
  type: 'custom_emoji';
  custom_emoji_id: string;
};
