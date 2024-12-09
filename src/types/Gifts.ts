import { Gift } from './';

/**
 * ## Gifts
 * This object represent a list of gifts.
 * @see https://core.telegram.org/bots/api#gifts
 */
export type Gifts = {
  /**
   * The list of gifts
   */
  gifts: Gift[];
};
