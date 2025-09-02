/**
 * ## PaidMessagePriceChanged
 * This object represents a service message about a change in the price for paid messages in a chat.
 * @see https://core.telegram.org/bots/api#paidmessagepricechanged
 */
export type PaidMessagePriceChanged = {
  /**
   * New price for paid messages in the chat, in the smallest units of the currency (integer, not float). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json for the number of digits past the decimal point for each currency (https://core.telegram.org/bots/payments/currencies.json), it may be different for each currency.
   */
  amount: number;

  /**
   * Three-letter ISO 4217 currency code
   */
  currency: string;
};
