/**
 * ## BackgroundFillSolid
 * The background is filled using the selected color.
 * @see https://core.telegram.org/bots/api#backgroundfillsolid
 */
export type BackgroundFillSolid = {

  /**
   * Type of the background fill, always “solid”
   */
  type: 'solid';

  /**
   * The color of the background fill in the RGB24 format
   */
  color: string;
};
