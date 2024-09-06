import { Message } from './';

/**
 * ## GiveawayCompleted
 * This object represents a service message about the completion of a giveaway without public winners.
 * @see https://core.telegram.org/bots/api#giveawaycompleted
 */
export type GiveawayCompleted = {

  /**
   * Number of winners in the giveaway
   */
  winner_count: number;

  /**
   * Optional. Number of undistributed prizes
   */
  unclaimed_prize_count: number;

  /**
   * Optional. Message with the giveaway that was completed, if it wasn't deleted
   */
  giveaway_message: Message;
};
