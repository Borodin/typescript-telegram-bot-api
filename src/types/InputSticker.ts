import { InputFile, MaskPosition } from './';

/**
 * ## InputSticker
 * This object describes a sticker to be added to a sticker set.
 * @see https://core.telegram.org/bots/api#inputsticker
 */
export type InputSticker = {
  sticker: InputFile | string;
  format: 'static' | 'animated' | 'video';
  emoji_list: string[];
  mask_position?: MaskPosition;
  keywords?: string[];
};
