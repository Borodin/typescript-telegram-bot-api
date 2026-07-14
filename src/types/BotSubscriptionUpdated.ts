import { User } from './';

/**
 * ## BotSubscriptionUpdated
 * This object contains information about changes to a user payment subscription toward the current bot.
 * @see https://core.telegram.org/bots/api#botsubscriptionupdated
 */
export type BotSubscriptionUpdated = {
  /**
   * User who subscribed for payments toward the bot
   */
  user: User;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * The new state of the subscription. Currently, it can be one of "canceled" if the user canceled the subscription,
   * "active" if the user re-enabled a previously canceled subscription, or "failed" if payment for the subscription
   * failed.
   */
  state: 'canceled' | 'active' | 'failed';
};
