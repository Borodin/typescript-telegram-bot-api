import { File, PhotoSize, MaskPosition } from './';

/**
 * ## Sticker
 * This object represents a sticker.
 * @see https://core.telegram.org/bots/api#sticker
 */
export type Sticker = {
  file_id: string;
  file_unique_id: string;
  type: 'regular' | 'mask' | 'custom_emoji';
  width: number;
  height: number;
  is_animated: boolean;
  is_voice: boolean;
  thumbnail?: PhotoSize;
  emoji?: string;
  set_name?: string;
  premium_animation?: File;
  mask_position?: MaskPosition;
  custom_emoji_id?: string;
  needs_repainting?: boolean;
  file_size?: number;
};
