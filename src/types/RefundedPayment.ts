import { Currencies } from './index';

/**
 * ## RefundedPayment
 * This object contains basic information about a refunded payment.
 * @see https://core.telegram.org/bots/api#refundedpayment
 */
export type RefundedPayment = {

  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR”
   */
  currency: Currencies | 'XTR';

  /**
   * Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price
   * of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the
   * decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;

  /**
   * Optional. Provider payment identifier
   */
  provider_payment_charge_id?: string;
};
