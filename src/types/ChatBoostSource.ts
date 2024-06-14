import {
  ChatBoostSourcePremium,
  ChatBoostSourceGiftCode,
  ChatBoostSourceGiveaway,
} from './';

export type ChatBoostSource =
  | ChatBoostSourcePremium
  | ChatBoostSourceGiftCode
  | ChatBoostSourceGiveaway;
