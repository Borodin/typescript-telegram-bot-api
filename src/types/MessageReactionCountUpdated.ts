import { Chat, ReactionCount } from './';

/**
 * ## MessageReactionCountUpdated
 * This object represents reaction changes on a message with anonymous reactions.
 * @see https://core.telegram.org/bots/api#messagereactioncountupdated
 */
export type MessageReactionCountUpdated = {
  /**
   * The chat containing the message
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Date of the change in Unix time
   */
  date: number;

  /**
   * List of reactions that are present on the message
   */
  reactions: ReactionCount[];
};
