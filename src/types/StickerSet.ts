import { Sticker, PhotoSize } from './';

/**
 * ## StickerSet
 * This object represents a sticker set.
 * @see https://core.telegram.org/bots/api#stickerset
 */
export type StickerSet = {
  name: string;
  title: string;
  sticker_type: Sticker['type'];
  stickers: Sticker[];
  thumbnail?: PhotoSize;
};
