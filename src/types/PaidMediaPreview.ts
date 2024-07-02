/**
 * ## PaidMediaPreview
 * The paid media isn't available before the payment.
 * @see https://core.telegram.org/bots/api#paidmediapreview
 */

export type PaidMediaPreview = {
  /**
   * Type of the paid media, always “preview”
   */
  type: 'preview';

  /**
   * Optional. Media width as defined by the sender
   */
  width?: number;

  /**
   * Optional. Media height as defined by the sender
   */
  height?: number;

  /**
   * Optional. Duration of the media in seconds as defined by the sender
   */
  duration?: number;
};
