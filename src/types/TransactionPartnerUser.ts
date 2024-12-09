import { User } from './User';
import { PaidMedia } from './PaidMedia';
import { Gift } from './Gift';

/**
 * ## TransactionPartnerUser
 * Describes a transaction with a user.
 * @see https://core.telegram.org/bots/api#transactionpartneruser
 */
export type TransactionPartnerUser = {
  /**
   * Type of the transaction partner, always “user”
   */
  type: 'user';

  /**
   * Information about the user
   */
  user: User;

  /**
   * Optional. Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * Optional. The duration of the paid subscription
   */
  subscription_period?: number;

  /**
   * Optional. Information about the paid media bought by the user
   */
  paid_media: PaidMedia[];

  /**
   * Optional. Bot-specified paid media payload
   */
  paid_media_payload: string;

  /**
   * Optional. The gift sent to the user by the bot
   */
  gift?: Gift;
};
