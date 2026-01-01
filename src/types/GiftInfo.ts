import { Gift } from './Gift';
import { MessageEntity } from './MessageEntity';

/**
 * ## GiftInfo
 * Describes a service message about a regular gift that was sent or received.
 * @see https://core.telegram.org/bots/api#giftinfo
 */
export type GiftInfo = {
  /**
   * Information about the gift
   */
  gift: Gift;

  /**
   * Optional. Unique identifier of the received gift for the bot; only present
   * for gifts received on behalf of business accounts
   */
  owned_gift_id?: string;

  /**
   * Optional. Number of Telegram Stars that can be claimed by the receiver by
   * converting the gift; omitted if conversion to Telegram Stars is impossible
   */
  convert_star_count?: number;

  /**
   * Optional. Number of Telegram Stars that were prepaid by the sender for the ability to upgrade the gift
   */
  prepaid_upgrade_star_count?: number;

  /**
   * Optional. True, if the gift's upgrade was purchased after the gift was sent
   */
  is_upgrade_separate?: true;

  /**
   * Optional. True, if the gift can be upgraded to a unique gift
   */
  can_be_upgraded?: true;

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
   * Optional. Unique number reserved for this gift when upgraded. See the number field in UniqueGift
   */
  unique_gift_number?: number;
};
