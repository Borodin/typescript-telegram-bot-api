import { User } from './';

/**
 * ## ChatBoostSourceGiveaway
 * The boost was obtained by the creation of a Telegram Premium giveaway. This boosts the chat 4 times for the duration
 * of the corresponding Telegram Premium subscription.
 * @see https://core.telegram.org/bots/api#chatboostsourcegiveaway
 */
export type ChatBoostSourceGiveaway = {
  /**
   * Source of the boost, always “giveaway”
   */
  source: 'giveaway';

  /**
   * Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if
   * the message isn't sent yet.
   */
  giveaway_message_id: number;

  /**
   * Optional. User that won the prize in the giveaway if any
   */
  user?: User;

  /**
   * Optional. True, if the giveaway was completed, but there was no user to win the prize
   */
  is_unclaimed?: boolean;
};
