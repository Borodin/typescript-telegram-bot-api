import { ChatBoostSource, Chat } from './';

/**
 * ## ChatBoostRemoved
 * This object represents a boost removed from a chat.
 * @see https://core.telegram.org/bots/api#chatboostremoved
 */
export type ChatBoostRemoved = {
  chat: Chat;
  boost_id: string;
  remove_date: number;
  source: ChatBoostSource;
};
