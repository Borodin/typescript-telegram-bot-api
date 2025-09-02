import { ReactionType } from './';

/**
 * ## StoryAreaTypeSuggestedReaction
 * Describes a story area pointing to a suggested reaction. Currently, a story
 * can have up to 5 suggested reaction areas.
 * @see https://core.telegram.org/bots/api#storyareatypesuggestedreaction
 */
export type StoryAreaTypeSuggestedReaction = {
  /**
   * Type of the area, always “suggested_reaction”
   */
  type: 'suggested_reaction';

  /**
   * Type of the reaction
   */
  reaction_type: ReactionType;

  /**
   * Optional. Pass True if the reaction area has a dark background
   */
  is_dark?: boolean;

  /**
   * Optional. Pass True if reaction area corner is flipped
   */
  is_flipped?: boolean;
};
