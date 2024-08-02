import { Message } from './';

/**
 * ## GiveawayCompleted
 * This object represents a service message about the completion of a giveaway without public winners.
 * @see https://core.telegram.org/bots/api#giveawaycompleted
 */
export type GiveawayCompleted = {
  winner_count: number;
  unclaimed_prize_count: number;
  giveaway_message: Message;
};
