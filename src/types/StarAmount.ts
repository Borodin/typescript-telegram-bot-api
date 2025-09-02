/**
 * ## StarAmount
 * Describes an amount of Telegram Stars.
 * @see https://core.telegram.org/bots/api#staramount
 */
export type StarAmount = {
  /**
   * Integer amount of Telegram Stars, rounded to 0; can be negative
   */
  amount: number;

  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars;
   * from -999999999 to 999999999; can be negative if and only if amount is non-positive
   */
  nanostar_amount?: number;
};
