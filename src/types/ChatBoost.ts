import { ChatBoostSource } from './';

export type ChatBoost = {
  boost_id: string;
  add_date: number;
  expiration_date: number;
  source: ChatBoostSource;
};
