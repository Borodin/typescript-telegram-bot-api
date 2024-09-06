/**
 * ## BackgroundFillGradient
 * The background is a gradient fill.
 * @see https://core.telegram.org/bots/api#backgroundfillgradient
 */
export type BackgroundFillGradient = {

  /**
   * Type of the background fill, always “gradient”
   */
  type: 'gradient';

  /**
   * Top color of the gradient in the RGB24 format
   */
  top_color: number;

  /**
   * Bottom color of the gradient in the RGB24 format
   */
  bottom_color: number;

  /**
   * Clockwise rotation angle of the background fill in degrees; 0-359
   */
  rotation_angle: number;
};
