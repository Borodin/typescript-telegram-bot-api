import { Chat } from './';

/**
 * ## InaccessibleMessage
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.
 * @see https://core.telegram.org/bots/api#inaccessiblemessage
 */
export type InaccessibleMessage = {

  /**
   * Chat the message belonged to
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Always 0. The field can be used to differentiate regular and inaccessible messages.
   */
  date: 0;
};
