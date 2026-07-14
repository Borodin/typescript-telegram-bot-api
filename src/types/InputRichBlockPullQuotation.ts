import { RichText } from './';

/**
 * ## InputRichBlockPullQuotation
 * A quotation with centered text, loosely corresponding to the HTML tag <aside>.
 * @see https://core.telegram.org/bots/api#inputrichblockpullquotation
 */
export type InputRichBlockPullQuotation = {
  /**
   * Type of the block, always "pullquote"
   */
  type: 'pullquote';

  /**
   * Text of the block
   */
  text: RichText;

  /**
   * Optional. Credit of the block
   */
  credit?: RichText;
};
