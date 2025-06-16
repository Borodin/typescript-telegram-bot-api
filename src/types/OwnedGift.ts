import { OwnedGiftRegular, OwnedGiftUnique } from './';

/**
 * ## OwnedGift
 * This object describes a gift received and owned by a user or a chat.
 * Currently, it can be one of:
 * - OwnedGiftRegular
 * - OwnedGiftUnique
 * @see https://core.telegram.org/bots/api#ownedgift
 */
export type OwnedGift = OwnedGiftRegular | OwnedGiftUnique;
