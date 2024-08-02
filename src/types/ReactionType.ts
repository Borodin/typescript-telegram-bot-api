import { ReactionTypeEmoji, ReactionTypeCustomEmoji } from './';

/**
 * ## ReactionType
 * This object describes the type of a reaction. Currently, it can be one of
 * - ReactionTypeEmoji
 * - ReactionTypeCustomEmoji
 * @see https://core.telegram.org/bots/api#reactiontype
 */
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji;
