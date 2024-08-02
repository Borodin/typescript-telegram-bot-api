import { ChatBoostSource } from './';

/**
 * ## ChatBoost
 * This object contains information about a chat boost.
 * @see https://core.telegram.org/bots/api#chatboost
 */
export type ChatBoost = {
  boost_id: string;
  add_date: number;
  expiration_date: number;
  source: ChatBoostSource;
};
