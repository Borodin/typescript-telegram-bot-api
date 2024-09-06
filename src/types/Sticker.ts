import { File, PhotoSize, MaskPosition } from './';

/**
 * ## Sticker
 * This object represents a sticker.
 * @see https://core.telegram.org/bots/api#sticker
 */
export type Sticker = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used
   * to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent
   * from its format, which is determined by the fields is_animated and is_video.
   */
  type: 'regular' | 'mask' | 'custom_emoji';

  /**
   * Sticker width
   */
  width: number;

  /**
   * Sticker height
   */
  height: number;

  /**
   * True, if the sticker is animated
   */
  is_animated: boolean;

  /**
   * True, if the sticker is a video sticker
   */
  is_voice: boolean;

  /**
   * Optional. Sticker thumbnail in the .WEBP or .JPG format
   */
  thumbnail?: PhotoSize;

  /**
   * Optional. Emoji associated with the sticker
   */
  emoji?: string;

  /**
   * Optional. Name of the sticker set to which the sticker belongs
   */
  set_name?: string;

  /**
   * Optional. For premium regular stickers, premium animation for the sticker
   */
  premium_animation?: File;

  /**
   * Optional. For mask stickers, the position where the mask should be placed
   */
  mask_position?: MaskPosition;

  /**
   * Optional. For custom emoji stickers, unique identifier of the custom emoji
   */
  custom_emoji_id?: string;

  /**
   * Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium
   * badge in emoji status, white color on chat photos, or another appropriate color in other places
   */
  needs_repainting?: boolean;

  /**
   * Optional. File size in bytes
   */
  file_size?: number;
};
