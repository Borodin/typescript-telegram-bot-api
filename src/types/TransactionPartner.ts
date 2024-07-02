import { TransactionPartnerFragment } from './TransactionPartnerFragment';
import { TransactionPartnerUser } from './TransactionPartnerUser';
import { TransactionPartnerTelegramAds } from './TransactionPartnerTelegramAds';
import { TransactionPartnerOther } from './TransactionPartnerOther';

/**
 * ## TransactionPartner
 * This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
 * - TransactionPartnerFragment
 * - TransactionPartnerUser
 * - TransactionPartnerTelegramAds
 * - TransactionPartnerOther
 * @see https://core.telegram.org/bots/api#transactionpartner
 */
export type TransactionPartner =
  | TransactionPartnerFragment
  | TransactionPartnerUser
  | TransactionPartnerTelegramAds
  | TransactionPartnerOther;
