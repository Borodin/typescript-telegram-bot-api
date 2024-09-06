/**
 * ## ForumTopic
 * This object represents a forum topic.
 * @see https://core.telegram.org/bots/api#forumtopic
 */
export type ForumTopic = {

  /**
   * Unique identifier of the forum topic
   */
  message_thread_id: number;

  /**
   * Name of the topic
   */
  name: string;

  /**
   * Color of the topic icon in RGB format
   */
  icon_color: string;

  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id?: string;
};
