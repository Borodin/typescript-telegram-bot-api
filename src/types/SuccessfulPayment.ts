import { Currencies, OrderInfo } from './';

/**
 * ## SuccessfulPayment
 * This object contains basic information about a successful payment.
 * @see https://core.telegram.org/bots/api#successfulpayment
 */
export type SuccessfulPayment = {
  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
   */
  currency: Currencies | 'XTR';

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45
   * pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point
   * for each currency (2 for the majority of currencies).
   */
  total_amount: number;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * Optional. Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string;

  /**
   * Optional. Order information provided by the user
   */
  order_info?: OrderInfo;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;

  /**
   * Provider payment identifier
   */
  provider_payment_charge_id: string;
};
