/**
 * ## TransactionPartnerTelegramApi
 * Describes a transaction with payment for paid broadcasting.
 * @see https://core.telegram.org/bots/api#transactionpartnertelegramapi
 */
export type TransactionPartnerTelegramApi = {
  /**
   * Type of the transaction partner, always “telegram_api”
   */
  type: 'telegram_api';

  /**
   * The number of successful requests that exceeded regular limits and were therefore billed
   */
  request_count: number;
};
