import { User } from './';

/**
 * ## BusinessConnection
 * Describes the connection of the bot with a business account.
 * @see https://core.telegram.org/bots/api#businessconnection
 */
export type BusinessConnection = {
  id: string;
  user: User;
  message_thread_id?: number;
  user_chat_id: number;
  date: number;
  can_reply: boolean;
  is_enabled: boolean;
};
