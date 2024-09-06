import { Sticker, PhotoSize } from './';

/**
 * ## StickerSet
 * This object represents a sticker set.
 * @see https://core.telegram.org/bots/api#stickerset
 */
export type StickerSet = {

  /**
   * Sticker set name
   */
  name: string;

  /**
   * Sticker set title
   */
  title: string;

  /**
   * Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”
   */
  sticker_type: Sticker['type'];

  /**
   * List of all set stickers
   */
  stickers: Sticker[];

  /**
   * Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
   */
  thumbnail?: PhotoSize;
};
