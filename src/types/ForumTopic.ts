/**
 * ## ForumTopic
 * This object represents a forum topic.
 * @see https://core.telegram.org/bots/api#forumtopic
 */
export type ForumTopic = {
  message_thread_id: number;
  name: string;
  icon_color: string;
  icon_custom_emoji_id?: string;
};
