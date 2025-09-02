import {
  StoryAreaTypeLocation,
  StoryAreaTypeSuggestedReaction,
  StoryAreaTypeLink,
  StoryAreaTypeWeather,
  StoryAreaTypeUniqueGift,
} from './';

/**
 * ## StoryAreaType
 * Describes the type of a clickable area on a story. Currently, it can be one of:
 * - StoryAreaTypeLocation
 * - StoryAreaTypeSuggestedReaction
 * - StoryAreaTypeLink
 * - StoryAreaTypeWeather
 * - StoryAreaTypeUniqueGift
 * @see https://core.telegram.org/bots/api#storyareatype
 */
export type StoryAreaType =
  | StoryAreaTypeLocation
  | StoryAreaTypeSuggestedReaction
  | StoryAreaTypeLink
  | StoryAreaTypeWeather
  | StoryAreaTypeUniqueGift;
