import { Sticker } from './';

/**
 * ## UniqueGiftSymbol
 * This object describes the symbol shown on the pattern of a unique gift.
 * @see https://core.telegram.org/bots/api#uniquegiftsymbol
 */
export type UniqueGiftSymbol = {
  /**
   * Name of the symbol
   */
  name: string;

  /**
   * The sticker that represents the unique gift
   */
  sticker: Sticker;

  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};
