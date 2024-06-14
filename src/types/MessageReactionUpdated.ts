import { Chat, User, ReactionType } from './';

export type MessageReactionUpdated = {
  chat: Chat;
  message_id: number;
  user: User;
  actor_chat: Chat;
  date: number;
  old_reaction: ReactionType[];
  new_reaction: ReactionType[];
};
