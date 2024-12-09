import {
  TransactionPartnerFragment,
  TransactionPartnerUser,
  TransactionPartnerTelegramAds,
  TransactionPartnerTelegramApi,
  TransactionPartnerOther,
  TransactionPartnerAffiliateProgram,
} from './';

/**
 * ## TransactionPartner
 * This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be
 * one of
 * - TransactionPartnerUser
 * - TransactionPartnerAffiliateProgram
 * - TransactionPartnerFragment
 * - TransactionPartnerTelegramAds
 * - TransactionPartnerTelegramApi
 * - TransactionPartnerOther
 * @see https://core.telegram.org/bots/api#transactionpartner
 */
export type TransactionPartner =
  | TransactionPartnerUser
  | TransactionPartnerAffiliateProgram
  | TransactionPartnerFragment
  | TransactionPartnerTelegramAds
  | TransactionPartnerTelegramApi
  | TransactionPartnerOther;
