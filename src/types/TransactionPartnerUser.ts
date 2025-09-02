import { User, PaidMedia, Gift, AffiliateInfo } from './';

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
   * Type of the transaction, currently one of:
   * - "invoice_payment" for payments via invoices
   * - "paid_media_payment" for payments for paid media
   * - "gift_purchase" for gifts sent by the bot
   * - "premium_purchase" for Telegram Premium subscriptions gifted by the bot
   * - "business_account_transfer" for direct transfers from managed business accounts
   */
  transaction_type:
    | 'invoice_payment'
    | 'paid_media_payment'
    | 'gift_purchase'
    | 'premium_purchase'
    | 'business_account_transfer';

  /**
   * Information about the user
   */
  user: User;

  /**
   * Optional. Information about the affiliate that received a commission via this transaction.
   * Can be available only for “invoice_payment” and “paid_media_payment” transactions.
   */
  affiliate?: AffiliateInfo;

  /**
   * Optional. Bot-specified invoice payload. Can be available only for “invoice_payment” transactions.
   */
  invoice_payload?: string;

  /**
   * Optional. The duration of the paid subscription. Can be available only for “invoice_payment” transactions.
   */
  subscription_period?: number;

  /**
   * Optional. Information about the paid media bought by the user; for “paid_media_payment” transactions only
   */
  paid_media?: PaidMedia[];

  /**
   * Optional. Bot-specified paid media payload. Can be available only for “paid_media_payment” transactions.
   */
  paid_media_payload?: string;

  /**
   * Optional. The gift sent to the user by the bot; for “gift_purchase” transactions only
   */
  gift?: Gift;

  /**
   * Optional. Number of months the gifted Telegram Premium subscription will be active for;
   * for “premium_purchase” transactions only
   */
  premium_subscription_duration?: number;
};
