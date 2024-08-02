import { Chat } from './';

/**
 * ## InaccessibleMessage
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.
 * @see https://core.telegram.org/bots/api#inaccessiblemessage
 */
export type InaccessibleMessage = {
  chat: Chat;
  message_id: number;
  date: 0;
};
