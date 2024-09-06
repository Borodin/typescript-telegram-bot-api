import { PaidMedia } from './PaidMedia';

/**
 * ## PaidMediaInfo
 * Describes the paid media added to a message.
 * @see https://core.telegram.org/bots/api#paidmediainfo
 */
export type PaidMediaInfo = {
  /**
   * The number of Telegram Stars that must be paid to buy access to the media
   */
  star_count: number;

  /**
   * Information about the paid media
   */
  paid_media: PaidMedia[];
};
