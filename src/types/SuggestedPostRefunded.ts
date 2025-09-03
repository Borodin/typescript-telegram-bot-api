import { Message } from './';

/**
 * ## SuggestedPostRefunded
 * Describes a service message about a payment refund for a suggested post.
 * @see https://core.telegram.org/bots/api#suggestedpostrefunded
 */
export type SuggestedPostRefunded = {
  /**
   * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the
   * reply_to_message field even if it itself is a reply.
   */
  suggested_post_message: Message;

  /**
   * Reason for the refund. Currently, one of “post_deleted” if the post was deleted within 24 hours of being posted or
   * removed from scheduled messages without being posted, or “payment_refunded” if the payer refunded their payment.
   */
  reason: string;
};
