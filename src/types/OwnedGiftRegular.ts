import { Gift, User, MessageEntity } from './';

/**
 * ## OwnedGiftRegular
 * Describes a regular gift owned by a user or a chat.
 * @see https://core.telegram.org/bots/api#ownedgiftregular
 */
export type OwnedGiftRegular = {
  /**
   * Type of the gift, always “regular”
   */
  type: 'regular';

  /**
   * Information about the regular gift
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
   * Optional. Text of the message that was added to the gift
   */
  text?: string;

  /**
   * Optional. Special entities that appear in the text
   */
  entities?: MessageEntity[];

  /**
   * Optional. True, if the sender and gift text are shown only to the gift
   * receiver; otherwise, everyone will be able to see them
   */
  is_private?: true;

  /**
   * Optional. True, if the gift is displayed on the account's profile page; for
   * gifts received on behalf of business accounts only
   */
  is_saved?: true;

  /**
   * Optional. True, if the gift can be upgraded to a unique gift; for gifts
   * received on behalf of business accounts only
   */
  can_be_upgraded?: true;

  /**
   * Optional. True, if the gift was refunded and isn't available anymore
   */
  was_refunded?: true;

  /**
   * Optional. Number of Telegram Stars that can be claimed by the receiver
   * instead of the gift; omitted if the gift cannot be converted to Telegram Stars
   */
  convert_star_count?: number;

  /**
   * Optional. Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
   */
  prepaid_upgrade_star_count?: number;
};
