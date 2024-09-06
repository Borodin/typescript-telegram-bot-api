import { ChatBoostSource, Chat } from './';

/**
 * ## ChatBoostRemoved
 * This object represents a boost removed from a chat.
 * @see https://core.telegram.org/bots/api#chatboostremoved
 */
export type ChatBoostRemoved = {

  /**
   * Chat which was boosted
   */
  chat: Chat;

  /**
   * Unique identifier of the boost
   */
  boost_id: string;

  /**
   * Point in time (Unix timestamp) when the boost was removed
   */
  remove_date: number;

  /**
   * Source of the removed boost
   */
  source: ChatBoostSource;
};
