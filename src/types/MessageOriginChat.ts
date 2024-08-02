import { Chat } from './';

/**
 * ## MessageOriginChat
 * The message was originally sent on behalf of a chat to a group chat.
 * @see https://core.telegram.org/bots/api#messageoriginchat
 */
export type MessageOriginChat = {
  type: 'chat';
  date: number;
  sender_chat: Chat;
  author_signature?: string;
};
