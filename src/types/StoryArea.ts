import { StoryAreaPosition, StoryAreaType } from './';

/**
 * ## StoryArea
 * Describes a clickable area on a story media.
 * @see https://core.telegram.org/bots/api#storyarea
 */
export type StoryArea = {
  /**
   * Position of the area
   */
  position: StoryAreaPosition;

  /**
   * Type of the area
   */
  type: StoryAreaType;
};
