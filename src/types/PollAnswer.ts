import { Chat, User } from './';

export type PollAnswer = {
  poll_id: string;
  voter_chat: Chat;
  user: User;
  option_ids: number[];
};
