import { User, Chat } from './';

/**
 * ## AffiliateInfo
 * Contains information about the affiliate that received a commission via this transaction.
 */
export type AffiliateInfo = {
  /**
   * Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user
   */
  affiliate_user?: User;

  /**
   * Optional. The chat that received an affiliate commission if it was received by a chat
   */
  affiliate_chat?: Chat;

  /**
   * The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from
   * referred users
   */
  commission_per_mille: number;

  /**
   * Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for
   * refunds
   */
  amount: number;

  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate;
   * from -999999999 to 999999999; can be negative for refunds
   */
  nanostar_amount?: number;
};
