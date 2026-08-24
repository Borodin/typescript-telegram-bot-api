import { RichText } from './';

/**
 * ## RichBlockExpandableBlockQuotation
 * A block quotation, corresponding to the HTML tag <blockquote> with custom attribute "collapsed".
 * @see https://core.telegram.org/bots/api#richblockexpandableblockquotation
 */
export type RichBlockExpandableBlockQuotation = {
  /**
   * Type of the block, always "expandable_blockquote"
   */
  type: 'expandable_blockquote';

  /**
   * Content of the block
   */
  text: RichText;

  /**
   * Optional. Credit of the block
   */
  credit?: RichText;
};
