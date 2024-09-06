import { Chat, ChatBoost } from './';

/**
 * ## ChatBoostUpdated
 * This object represents a boost added to a chat or changed.
 * @see https://core.telegram.org/bots/api#chatboostupdated
 */
export type ChatBoostUpdated = {

  /**
   * Chat which was boosted
   */
  chat: Chat;

  /**
   * Information about the chat boost
   */
  boost: ChatBoost;
};
