import { Chat } from './';

export type BusinessMessagesDeleted = {
  business_connection_id: string;
  chat: Chat;
  message_ids: number[];
};
