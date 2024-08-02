/**
 * ## BackgroundFillGradient
 * The background is a gradient fill.
 * @see https://core.telegram.org/bots/api#backgroundfillgradient
 */
export type BackgroundFillGradient = {
  type: 'gradient';
  top_color: number;
  bottom_color: number;
  rotation_angle: number;
};
