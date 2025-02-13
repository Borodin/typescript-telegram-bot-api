import {
  TransactionPartnerFragment,
  TransactionPartnerUser,
  TransactionPartnerChat,
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
 * - TransactionPartnerChat
 * - TransactionPartnerAffiliateProgram
 * - TransactionPartnerFragment
 * - TransactionPartnerTelegramAds
 * - TransactionPartnerTelegramApi
 * - TransactionPartnerOther
 * @see https://core.telegram.org/bots/api#transactionpartner
 */
export type TransactionPartner =
  | TransactionPartnerUser
  | TransactionPartnerChat
  | TransactionPartnerAffiliateProgram
  | TransactionPartnerFragment
  | TransactionPartnerTelegramAds
  | TransactionPartnerTelegramApi
  | TransactionPartnerOther;
