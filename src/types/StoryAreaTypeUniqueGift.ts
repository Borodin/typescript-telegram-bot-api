/**
 * ## StoryAreaTypeUniqueGift
 * Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.
 * @see https://core.telegram.org/bots/api#storyareatypeuniquegift
 */
export type StoryAreaTypeUniqueGift = {
  /**
   * Type of the area, always “unique_gift”
   */
  type: 'unique_gift';

  /**
   * Unique name of the gift
   */
  name: string;
};
