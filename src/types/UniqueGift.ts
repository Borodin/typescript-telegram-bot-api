import { UniqueGiftModel, UniqueGiftSymbol, UniqueGiftBackdrop, Chat } from './';

/**
 * ## UniqueGift
 * This object describes a unique gift that was upgraded from a regular gift.
 * @see https://core.telegram.org/bots/api#uniquegift
 */
export type UniqueGift = {
  /**
   * Human-readable name of the regular gift from which this unique gift was upgraded
   */
  base_name: string;

  /**
   * Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas
   */
  name: string;

  /**
   * Unique number of the upgraded gift among gifts upgraded from the same regular gift
   */
  number: number;

  /**
   * Model of the gift
   */
  model: UniqueGiftModel;

  /**
   * Symbol of the gift
   */
  symbol: UniqueGiftSymbol;

  /**
   * Backdrop of the gift
   */
  backdrop: UniqueGiftBackdrop;

  /**
   * Optional. Information about the chat that published the gift
   */
  publisher_chat?: Chat;
};
