/**
 * ## Chat
 * This object represents a chat.
 * @see https://core.telegram.org/bots/api#chat
 */
export type Chat = {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages
   * may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit
   * integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
   */
  type: string;

  /**
   * Optional. Title, for supergroups, channels and group chats
   */
  title?: string;

  /**
   * Optional. Username, for private chats, supergroups and channels if available
   */
  username?: string;

  /**
   * Optional. First name of the other party in a private chat
   */
  first_name?: string;

  /**
   * Optional. Last name of the other party in a private chat
   */
  last_name?: string;

  /**
   * Optional. True, if the supergroup chat is a forum (has topics enabled)
   */
  is_forum?: boolean;
};
