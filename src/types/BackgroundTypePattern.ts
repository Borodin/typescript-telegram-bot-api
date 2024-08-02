import { Document, BackgroundFill } from './';

/**
 * ## BackgroundTypePattern
 * The background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.
 * @see https://core.telegram.org/bots/api#backgroundtypepattern
 */
export type BackgroundTypePattern = {
  type: 'pattern';
  document: Document;
  fill: BackgroundFill;
  intensity: number;
  is_blurred: boolean;
  is_moving: boolean;
};
