import { BackgroundTypeFill, BackgroundTypeWallpaper, BackgroundTypePattern, BackgroundTypeChatTheme } from './';

/**
 * ## BackgroundType
 * This object describes the type of a background. Currently, it can be one of
 * - `BackgroundTypeFill`
 * - `BackgroundTypeWallpaper`
 * - `BackgroundTypePattern`
 * - `BackgroundTypeChatTheme`
 * @see https://core.telegram.org/bots/api#backgroundtype
 */
export type BackgroundType =
  | BackgroundTypeFill
  | BackgroundTypeWallpaper
  | BackgroundTypePattern
  | BackgroundTypeChatTheme;
