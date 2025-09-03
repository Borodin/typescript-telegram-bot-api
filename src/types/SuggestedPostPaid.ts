import { Message, StarAmount } from './';

/**
 * ## SuggestedPostPaid
 * Describes a service message about a successful payment for a suggested post.
 * @see https://core.telegram.org/bots/api#suggestedpostpaid
 */
export type SuggestedPostPaid = {
  /**
   * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the
   * reply_to_message field even if it itself is a reply.
   */
  suggested_post_message: Message;

  /**
   * Currency in which the payment was made. Currently, one of “XTR” for Telegram Stars or “TON” for toncoins
   */
  currency: 'XTR' | 'TON';

  /**
   * Optional. The amount of the currency that was received by the channel in nanotoncoins; for payments in toncoins
   * only
   */
  amount?: number;

  /**
   * Optional. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only
   */
  star_amount?: StarAmount;
};
