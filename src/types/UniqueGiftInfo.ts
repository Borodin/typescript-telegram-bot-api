import { UniqueGift } from './';

/**
 * ## UniqueGiftInfo
 * Describes a service message about a unique gift that was sent or received.
 * @see https://core.telegram.org/bots/api#uniquegiftinfo
 */
export type UniqueGiftInfo = {
  /**
   * Information about the gift
   */
  gift: UniqueGift;

  /**
   * Origin of the gift. Currently, either "upgrade" for gifts upgraded from regular gifts, "transfer" for gifts
   * transferred from other users or channels, "resale" for gifts bought from other users, "gifted_upgrade" for
   * upgrades purchased after the gift was sent, or "offer" for gifts bought or sold through gift purchase offers
   */
  origin: string;

  /**
   * Optional. For gifts bought from other users, the currency in which the payment for the gift was done.
   * Currently, one of "XTR" for Telegram Stars or "TON" for toncoins.
   */
  last_resale_currency?: string;

  /**
   * Optional. For gifts bought from other users, the price paid for the gift in either Telegram Stars or nanotoncoins
   */
  last_resale_amount?: number;

  /**
   * Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of
   * business accounts
   */
  owned_gift_id?: string;

  /**
   * Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer
   * the gift
   */
  transfer_star_count?: number;

  /**
   * Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift
   * can be transferred now
   */
  next_transfer_date?: number;
};
