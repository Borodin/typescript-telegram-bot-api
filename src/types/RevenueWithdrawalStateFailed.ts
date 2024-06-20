/**
 * RevenueWithdrawalStateFailed
 * The withdrawal failed and the transaction was refunded.
 * #see https://core.telegram.org/bots/api#revenuewithdrawalstatefailed
 */
export type RevenueWithdrawalStateFailed = {
  /**
   * Type of the state, always “failed”
   */
  type: 'failed';
};
