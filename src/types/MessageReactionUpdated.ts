import { Chat, User, ReactionType } from './';

/**
 * ## MessageReactionUpdated
 * This object represents a change of a reaction on a message performed by a user.
 * @see https://core.telegram.org/bots/api#messagereactionupdated
 */
export type MessageReactionUpdated = {
  chat: Chat;
  message_id: number;
  user: User;
  actor_chat: Chat;
  date: number;
  old_reaction: ReactionType[];
  new_reaction: ReactionType[];
};
