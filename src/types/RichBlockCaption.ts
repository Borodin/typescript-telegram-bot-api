import { RichText } from './';

/**
 * ## RichBlockCaption
 * Caption of a rich formatted block.
 * @see https://core.telegram.org/bots/api#richblockcaption
 */
export type RichBlockCaption = {
  /**
   * Block caption
   */
  text: RichText;

  /**
   * Optional. Block credit which corresponds to the HTML tag <cite>
   */
  credit?: RichText;
};
