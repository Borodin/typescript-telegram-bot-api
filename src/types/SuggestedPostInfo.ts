import { SuggestedPostPrice } from './';

/**
 * ## SuggestedPostInfo
 * Contains information about a suggested post.
 * @see https://core.telegram.org/bots/api#suggestedpostinfo
 */
export type SuggestedPostInfo = {
  /**
   * State of the suggested post. Currently, it can be one of “pending”, “approved”, “declined”.
   */
  state: 'pending' | 'approved' | 'declined';

  /**
   * Optional. Proposed price of the post. If the field is omitted, then the post is unpaid.
   */
  price?: SuggestedPostPrice;

  /**
   * Optional. Proposed send date of the post. If the field is omitted, then the post can be published at any time
   * within 30 days at the sole discretion of the user or administrator who approves it.
   */
  send_date?: number;
};
