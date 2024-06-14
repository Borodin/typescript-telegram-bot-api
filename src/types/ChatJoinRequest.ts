import { Chat, ChatInviteLink, User } from './';

export type ChatJoinRequest = {
  chat: Chat;
  from: User;
  user_chat_id: number;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
};
