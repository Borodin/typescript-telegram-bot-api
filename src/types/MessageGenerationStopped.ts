import { Chat } from './';

/**
 * ## MessageGenerationStopped
 * This object describes an update about a user stopping message generation.
 * @see https://core.telegram.org/bots/api#messagegenerationstopped
 */
export type MessageGenerationStopped = {
  /**
   * Chat in which the message is generated
   */
  chat: Chat;

  /**
   * Optional. Unique identifier of the message thread in which the message is generated
   */
  message_thread_id?: number;

  /**
   * Unique identifier of the message draft which was stopped
   */
  draft_id: number;
};
