import { TransactionPartner } from './TransactionPartner';

/**
 * ## StarTransaction
 * Describes a Telegram Star transaction.
 * @see https://core.telegram.org/bots/api#startransaction
 */
export type StarTransaction = {

  /**
   * Unique identifier of the transaction. Coincides with the identifer of the original transaction for refund
   * transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from
   * users.
   */
  id: string;

  /**
   * Number of Telegram Stars transferred by the transaction
   */
  amount: number;

  /**
   * Date the transaction was created in Unix time
   */
  date: number;

  /**
   * Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed
   * withdrawal). Only for incoming transactions
   */
  source?: TransactionPartner;

  /**
   * Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only
   * for outgoing transactions
   */
  receiver?: TransactionPartner;
};
