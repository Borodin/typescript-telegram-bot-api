/**
 * ## ForumTopicCreated
 * This object represents a service message about a new forum topic created in the chat.
 * @see https://core.telegram.org/bots/api#forumtopiccreated
 */
export type ForumTopicCreated = {
  name: string;
  icon_color: number;
  icon_custom_emoji_id: string;
};
