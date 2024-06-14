import { ChatBoostSource, Chat } from './';

export type ChatBoostRemoved = {
  chat: Chat;
  boost_id: string;
  remove_date: number;
  source: ChatBoostSource;
};
