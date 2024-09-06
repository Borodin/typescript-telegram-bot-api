import { User } from './User';

/**
 * ## PaidMediaPreview
 * This object contains information about a paid media purchase.
 * @see https://core.telegram.org/bots/api#paidmediapurchased
 */
export type PaidMediaPurchased = {
  /**
   * User who purchased the media
   */
  from: User;

  /**
   * Bot-specified paid media payload
   */
  paid_media_payload: string;
};
