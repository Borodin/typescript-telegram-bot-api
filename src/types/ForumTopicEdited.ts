/**
 * ## ForumTopicEdited
 * This object represents a service message about an edited forum topic.
 * @see https://core.telegram.org/bots/api#forumtopicedited
 */
export type ForumTopicEdited = {
  /**
   * Optional. New name of the topic, if it was edited
   */
  name?: string;

  /**
   * Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon
   * was removed
   */
  icon_custom_emoji_id?: string;
};
