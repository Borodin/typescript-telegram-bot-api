/**
 * ## TransactionPartnerOther
 * Describes a transaction with an unknown source or recipient.
 * @see https://core.telegram.org/bots/api#transactionpartneruser
 */
export type TransactionPartnerOther = {
  /**
   * Type of the transaction partner, always “other”
   */
  type: 'other';
};
