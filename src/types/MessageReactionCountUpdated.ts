import { Chat, ReactionCount } from './';

export type MessageReactionCountUpdated = {
  chat: Chat;
  message_id: number;
  date: number;
  reactions: ReactionCount[];
};
