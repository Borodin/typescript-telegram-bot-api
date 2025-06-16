import { Sticker } from './';

/**
 * ## UniqueGiftModel
 * This object describes the model of a unique gift.
 * @see https://core.telegram.org/bots/api#uniquegiftmodel
 */
export type UniqueGiftModel = {
  /**
   * Name of the model
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
