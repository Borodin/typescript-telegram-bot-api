import { Chat } from './';

/**
 * ## MessageOriginChat
 * The message was originally sent on behalf of a chat to a group chat.
 * @see https://core.telegram.org/bots/api#messageoriginchat
 */
export type MessageOriginChat = {
  /**
   * Type of the message origin, always “chat”
   */
  type: 'chat';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Chat that sent the message originally
   */
  sender_chat: Chat;

  /**
   * Optional. For messages originally sent by an anonymous chat administrator, original message author signature
   */
  author_signature?: string;
};
