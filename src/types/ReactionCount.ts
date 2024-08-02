import { ReactionType } from './ReactionType';

/**
 * ## ReactionCount
 * Represents a reaction added to a message along with the number of times it was added.
 * @see https://core.telegram.org/bots/api#reactioncount
 */
export type ReactionCount = {
  type: ReactionType;
  total_count: number;
};
