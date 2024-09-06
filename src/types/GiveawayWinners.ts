import { Chat, User } from './';

/**
 * ## GiveawayWinners
 * This object represents a message about the completion of a giveaway with public winners.
 * @see https://core.telegram.org/bots/api#giveawaywinners
 */
export type GiveawayWinners = {

  /**
   * The chat that created the giveaway
   */
  chat: Chat;

  /**
   * Identifier of the message with the giveaway in the chat
   */
  giveaway_message_id: number;

  /**
   * Point in time (Unix timestamp) when winners of the giveaway were selected
   */
  winners_selection_date: number;

  /**
   * Total number of winners in the giveaway
   */
  winner_count: number;

  /**
   * List of up to 100 winners of the giveaway
   */
  winners: User[];

  /**
   * Optional. The number of other chats the user had to join in order to be eligible for the giveaway
   */
  additional_chat_count?: number;

  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for
   */
  premium_subscription_month_count?: number;

  /**
   * Optional. Number of undistributed prizes
   */
  unclaimed_prize_count?: number;

  /**
   * Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
   */
  only_new_members?: boolean;

  /**
   * Optional. True, if the giveaway was canceled because the payment for it was refunded
   */
  was_refunded?: boolean;

  /**
   * Optional. Description of additional giveaway prize
   */
  prize_description?: string;
};
