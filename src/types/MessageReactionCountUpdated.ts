import { Chat, ReactionCount } from './';

/**
 * ## MessageReactionCountUpdated
 * This object represents reaction changes on a message with anonymous reactions.
 * @see https://core.telegram.org/bots/api#messagereactioncountupdated
 */
export type MessageReactionCountUpdated = {
  chat: Chat;
  message_id: number;
  date: number;
  reactions: ReactionCount[];
};
