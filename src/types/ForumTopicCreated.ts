/**
 * ## ForumTopicCreated
 * This object represents a service message about a new forum topic created in the chat.
 * @see https://core.telegram.org/bots/api#forumtopiccreated
 */
export type ForumTopicCreated = {
  /**
   * Name of the topic
   */
  name: string;

  /**
   * Color of the topic icon in RGB format
   */
  icon_color: number;

  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id: string;

  /**
   * Optional. True, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed
   * by the bot
   */
  is_name_implicit?: true;
};
