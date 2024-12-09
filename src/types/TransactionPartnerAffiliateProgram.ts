import { User } from './';

/**
 * ## TransactionPartnerAffiliateProgram
 * Describes the affiliate program that issued the affiliate commission received via this transaction.
 * @see https://core.telegram.org/bots/api#transactionpartneraffiliateprogram
 */
export type TransactionPartnerAffiliateProgram = {
  /**
   * Type of the transaction partner, always “affiliate_program”
   */
  type: 'affiliate_program';

  /**
   * Optional. Information about the bot that sponsored the affiliate program
   */
  sponsor_user?: User;

  /**
   * The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program
   * sponsor from referred users
   */
  commission_per_mille: number;
};
