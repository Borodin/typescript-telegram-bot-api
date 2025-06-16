import { OwnedGift } from './';

/**
 * ## OwnedGifts
 * Contains the list of gifts received and owned by a user or a chat.
 * @see https://core.telegram.org/bots/api#ownedgifts
 */
export type OwnedGifts = {
  /**
   * The total number of gifts owned by the user or the chat
   */
  total_count: number;

  /**
   * The list of gifts
   */
  gifts: OwnedGift[];

  /**
   * Optional. Offset for the next request. If empty, then there are no more results
   */
  next_offset?: string;
};
