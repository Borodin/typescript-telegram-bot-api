import { BackgroundFill } from './';

/**
 * ## BackgroundTypeFill
 * The background is automatically filled based on the selected colors.
 * @see https://core.telegram.org/bots/api#backgroundtypefill
 */
export type BackgroundTypeFill = {
  type: 'fill';
  fill: BackgroundFill;
  dark_theme_dimming: number;
};
