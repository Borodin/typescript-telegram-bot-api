import { MaybeInaccessibleMessage, User } from './';

export type CallbackQuery = {
  id: string;
  from: User;
  message?: MaybeInaccessibleMessage;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
};
