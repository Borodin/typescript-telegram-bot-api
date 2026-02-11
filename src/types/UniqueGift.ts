import { UniqueGiftModel, UniqueGiftSymbol, UniqueGiftBackdrop, UniqueGiftColors, Chat } from './';

/**
 * ## UniqueGift
 * This object describes a unique gift that was upgraded from a regular gift.
 * @see https://core.telegram.org/bots/api#uniquegift
 */
export type UniqueGift = {
  /**
   * Identifier of the regular gift from which the gift was upgraded
   */
  gift_id: string;

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
   * Optional. True, if the original regular gift was exclusively purchaseable by Telegram Premium subscribers
   */
  is_premium?: true;

  /**
   * Optional. True, if the gift was used to craft another gift and isn't available anymore
   */
  is_burned?: true;

  /**
   * Optional. True, if the gift is assigned from the TON blockchain and can't be resold or transferred in Telegram
   */
  is_from_blockchain?: true;

  /**
   * Optional. The color scheme that can be used by the gift's owner for the chat's name, replies to messages and
   * link previews; for business account gifts and gifts that are currently on sale only
   */
  colors?: UniqueGiftColors;

  /**
   * Optional. Information about the chat that published the gift
   */
  publisher_chat?: Chat;
};
