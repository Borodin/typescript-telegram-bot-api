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
   * The number of unique gifts that receive this model for every 1000 gift upgrades. Always 0 for crafted gifts.
   */
  rarity_per_mille: number;

  /**
   * Optional. Rarity of the model if it is a crafted model. Currently, can be "uncommon", "rare", "epic", or
   * "legendary".
   */
  rarity?: string;
};
