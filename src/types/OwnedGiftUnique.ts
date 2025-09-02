import { Gift, User } from './';

/**
 * ## OwnedGiftUnique
 * Describes a unique gift owned by a user or a chat.
 * @see https://core.telegram.org/bots/api#ownedgiftunique
 */
export type OwnedGiftUnique = {
  /**
   * Type of the gift, always “unique”
   */
  type: 'unique';

  /**
   * Information about the unique gift
   */
  gift: Gift;

  /**
   * Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
   */
  owned_gift_id?: string;

  /**
   * Optional. Sender of the gift if it is a known user
   */
  sender_user?: User;

  /**
   * Date the gift was sent in Unix time
   */
  send_date: number;

  /**
   * Optional. True, if the gift is displayed on the account's profile page; for
   * gifts received on behalf of business accounts only
   */
  is_saved?: true;

  /**
   * Optional. True, if the gift can be transferred to another owner; for gifts
   * received on behalf of business accounts only
   */
  can_be_transferred?: true;

  /**
   * Optional. Number of Telegram Stars that must be paid to transfer the gift;
   * omitted if the bot cannot transfer the gift
   */
  transfer_star_count?: number;

  /**
   * Optional. Point in time (Unix timestamp) when the gift can be transferred.
   * If it is in the past, then the gift can be transferred now
   */
  next_transfer_date?: number;
};
