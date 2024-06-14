import { Chat } from './';

export type MessageOriginChannel = {
  type: 'channel';
  date: number;
  chat: Chat;
  message_id: number;
  author_signature?: string;
};
