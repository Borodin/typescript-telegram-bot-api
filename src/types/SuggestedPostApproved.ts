import { Message, SuggestedPostPrice } from './';

/**
 * ## SuggestedPostApproved
 * Describes a service message about the approval of a suggested post.
 * @see https://core.telegram.org/bots/api#suggestedpostapproved
 */
export type SuggestedPostApproved = {
  /**
   * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the
   * reply_to_message field even if it itself is a reply.
   */
  suggested_post_message?: Message;

  /**
   * Optional. Amount paid for the post
   */
  price?: SuggestedPostPrice;

  /**
   * Date when the post will be published
   */
  send_date: number;
};
