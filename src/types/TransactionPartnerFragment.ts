import { RevenueWithdrawalState } from './RevenueWithdrawalState';

/**
 * ## TransactionPartnerFragment
 * Describes a withdrawal transaction with Fragment.
 * @see https://core.telegram.org/bots/api#transactionpartnerfragment
 */
export type TransactionPartnerFragment = {
  /**
   * Type of the transaction partner, always “fragment”
   */
  type: 'fragment';

  /**
   * Optional. State of the transaction if the transaction is outgoing
   */
  withdrawal_state?: RevenueWithdrawalState;
};
