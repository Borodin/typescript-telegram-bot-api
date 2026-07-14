import { RichText } from './';

/**
 * ## InputRichBlockFooter
 * A footer, corresponding to the HTML tag <footer>.
 * @see https://core.telegram.org/bots/api#inputrichblockfooter
 */
export type InputRichBlockFooter = {
  /**
   * Type of the block, always "footer"
   */
  type: 'footer';

  /**
   * Text of the block
   */
  text: RichText;
};
