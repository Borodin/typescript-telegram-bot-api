import { User } from './';

/**
 * ## ChatBoostSourceGiveaway
 * The boost was obtained by the creation of a Telegram Premium giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
 * @see https://core.telegram.org/bots/api#chatboostsourcegiveaway
 */
export type ChatBoostSourceGiveaway = {
  source: 'giveaway';
  giveaway_message_id: number;
  user?: User;
  is_unclaimed?: boolean;
};
