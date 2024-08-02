import { Document } from './';

/**
 * ## BackgroundTypeWallpaper
 * The background is a wallpaper in the JPEG format.
 * @see https://core.telegram.org/bots/api#backgroundtypewallpaper
 */
export type BackgroundTypeWallpaper = {
  type: 'wallpaper';
  document: Document;
  dark_theme_dimming: number;
  is_blurred: boolean;
  is_moving: boolean;
};
