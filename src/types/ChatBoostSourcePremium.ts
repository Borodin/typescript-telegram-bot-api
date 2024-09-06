import { User } from './';

/**
 * ## ChatBoostSourcePremium
 * The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another
 * user.
 * @see https://core.telegram.org/bots/api#chatboostsourcepremium
 */
export type ChatBoostSourcePremium = {
  /**
   * Source of the boost, always “premium”
   */
  source: 'premium';

  /**
   * User that boosted the chat
   */
  user: User;
};
