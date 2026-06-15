import { RichText } from './';

/**
 * ## RichBlockFooter
 * A footer, corresponding to the HTML tag <footer>.
 * @see https://core.telegram.org/bots/api#richblockfooter
 */
export type RichBlockFooter = {
  /**
   * Type of the block, always "footer"
   */
  type: 'footer';

  /**
   * Text of the block
   */
  text: RichText;
};
