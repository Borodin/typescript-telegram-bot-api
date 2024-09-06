import { Document, BackgroundFill } from './';

/**
 * ## BackgroundTypePattern
 * The background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be
 * combined with the background fill chosen by the user.
 * @see https://core.telegram.org/bots/api#backgroundtypepattern
 */
export type BackgroundTypePattern = {

  /**
   * Type of the background, always “pattern”
   */
  type: 'pattern';

  /**
   * Document with the pattern
   */
  document: Document;

  /**
   * The background fill that is combined with the pattern
   */
  fill: BackgroundFill;

  /**
   * Intensity of the pattern when it is shown above the filled background; 0-100
   */
  intensity: number;

  /**
   * Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in
   * this case. For dark themes only
   */
  is_blurred: boolean;

  /**
   * Optional. True, if the background moves slightly when the device is tilted
   */
  is_moving: boolean;
};
