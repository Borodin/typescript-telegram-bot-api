import { RevenueWithdrawalStatePending } from './RevenueWithdrawalStatePending';
import { RevenueWithdrawalStateSucceeded } from './RevenueWithdrawalStateSucceeded';
import { RevenueWithdrawalStateFailed } from './RevenueWithdrawalStateFailed';

/**
 * ## RevenueWithdrawalState
 * This object describes the state of a revenue withdrawal operation. Currently, it can be one of
 * @see https://core.telegram.org/bots/api#revenuewithdrawalstate
 */
export type RevenueWithdrawalState =
  | RevenueWithdrawalStatePending
  | RevenueWithdrawalStateSucceeded
  | RevenueWithdrawalStateFailed;
