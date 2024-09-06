import { BackgroundFill } from './';

/**
 * ## BackgroundTypeFill
 * The background is automatically filled based on the selected colors.
 * @see https://core.telegram.org/bots/api#backgroundtypefill
 */
export type BackgroundTypeFill = {
  /**
   * Type of the background, always “fill”
   */
  type: 'fill';

  /**
   * The background fill
   */
  fill: BackgroundFill;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;
};
