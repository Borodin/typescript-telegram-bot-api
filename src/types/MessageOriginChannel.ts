import { Chat } from './';

/**
 * ## MessageOriginChannel
 * The message was originally sent to a channel chat.
 * @see https://core.telegram.org/bots/api#messageoriginchannel
 */
export type MessageOriginChannel = {

  /**
   * Type of the message origin, always “channel”
   */
  type: 'channel';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Channel chat to which the message was originally sent
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Optional. Signature of the original post author
   */
  author_signature?: string;
};
