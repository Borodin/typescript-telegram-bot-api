import { Document } from './';

/**
 * ## BackgroundTypeWallpaper
 * The background is a wallpaper in the JPEG format.
 * @see https://core.telegram.org/bots/api#backgroundtypewallpaper
 */
export type BackgroundTypeWallpaper = {

  /**
   * Type of the background, always “wallpaper”
   */
  type: 'wallpaper';

  /**
   * Document with the wallpaper
   */
  document: Document;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;

  /**
   * Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
   */
  is_blurred: boolean;

  /**
   * Optional. True, if the background moves slightly when the device is tilted
   */
  is_moving: boolean;
};
