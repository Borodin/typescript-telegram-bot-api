/**
 * ## StoryAreaTypeLink
 * Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.
 * @see https://core.telegram.org/bots/api#storyareatypelink
 */
export type StoryAreaTypeLink = {
  /**
   * Type of the area, always “link”
   */
  type: 'link';

  /**
   * HTTP or tg:// URL to be opened when the area is clicked
   */
  url: string;
};
