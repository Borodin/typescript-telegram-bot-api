import { StarTransaction } from './StarTransaction';

/**
 * ## StarTransactions
 * Contains a list of Telegram Star transactions.
 * @see https://core.telegram.org/bots/api#startransactions
 */
export type StarTransactions = {

  /**
   * The list of transactions
   */
  transactions: StarTransaction[];
};
