import {
  ChatBoostSourcePremium,
  ChatBoostSourceGiftCode,
  ChatBoostSourceGiveaway,
} from './';

/**
 * ## ChatBoostSource
 * This object describes the source of a chat boost. It can be one of
 * - ChatBoostSourcePremium
 * - ChatBoostSourceGiftCode
 * - ChatBoostSourceGiveaway
 * @see https://core.telegram.org/bots/api#chatboostsource
 */
export type ChatBoostSource =
  | ChatBoostSourcePremium
  | ChatBoostSourceGiftCode
  | ChatBoostSourceGiveaway;
