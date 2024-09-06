/**
 * ## RevenueWithdrawalStateSucceeded
 * The withdrawal succeeded.
 * @see https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded
 */
export type RevenueWithdrawalStateSucceeded = {

  /**
   * Type of the state, always “succeeded”
   */
  type: 'succeeded';

  /**
   * Date the withdrawal was completed in Unix time
   */
  date: number;

  /**
   * An HTTPS URL that can be used to see transaction details
   */
  url: string;
};
