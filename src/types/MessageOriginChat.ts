import { Chat } from './';

export type MessageOriginChat = {
  type: 'chat';
  date: number;
  sender_chat: Chat;
  author_signature?: string;
};
