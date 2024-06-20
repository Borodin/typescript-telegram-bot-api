import { TransactionPartnerFragment } from './TransactionPartnerFragment';
import { TransactionPartnerUser } from './TransactionPartnerUser';
import { TransactionPartnerOther } from './TransactionPartnerOther';

/**
 * ## TransactionPartner
 * This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
 */
export type TransactionPartner =
  | TransactionPartnerFragment
  | TransactionPartnerUser
  | TransactionPartnerOther;
