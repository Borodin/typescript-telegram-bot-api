import { Chat } from './';

/**
 * ## MessageOriginChannel
 * The message was originally sent to a channel chat.
 * @see https://core.telegram.org/bots/api#messageoriginchannel
 */
export type MessageOriginChannel = {
  type: 'channel';
  date: number;
  chat: Chat;
  message_id: number;
  author_signature?: string;
};
