import { User } from './';

export type BusinessConnection = {
  id: string;
  user: User;
  message_thread_id?: number;
  user_chat_id: number;
  date: number;
  can_reply: boolean;
  is_enabled: boolean;
};
