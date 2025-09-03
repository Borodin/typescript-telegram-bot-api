import { Message, SuggestedPostPrice } from './';

/**
 * ## SuggestedPostApprovalFailed
 * Describes a service message about the failed approval of a suggested post. Currently, only caused by insufficient
 * user funds at the time of approval.
 * @see https://core.telegram.org/bots/api#suggestedpostapprovalfailed
 */
export type SuggestedPostApprovalFailed = {
  /**
   * Optional. Message containing the suggested post whose approval has failed. Note that the Message object in this
   * field will not contain the reply_to_message field even if it itself is a reply.
   */
  suggested_post_message?: Message;

  /**
   * Expected price of the post
   */
  price?: SuggestedPostPrice;
};
