import { InputFile, MaskPosition } from './';

export type InputSticker = {
  sticker: InputFile | string;
  format: 'static' | 'animated' | 'video';
  emoji_list: [string, ...string[]];
  mask_position?: MaskPosition;
  keywords?: string[];
};
