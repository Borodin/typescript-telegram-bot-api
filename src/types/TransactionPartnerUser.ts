import { User } from './User';

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
};
