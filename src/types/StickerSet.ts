import { Sticker, PhotoSize } from './';

export type StickerSet = {
  name: string;
  title: string;
  sticker_type: Sticker['type'];
  stickers: Sticker[];
  thumbnail?: PhotoSize;
};
