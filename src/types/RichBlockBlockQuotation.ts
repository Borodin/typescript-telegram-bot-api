import { RichBlock, RichText } from './';

/**
 * ## RichBlockBlockQuotation
 * A block quotation, corresponding to the HTML tag <blockquote>.
 * @see https://core.telegram.org/bots/api#richblockblockquotation
 */
export type RichBlockBlockQuotation = {
  /**
   * Type of the block, always "blockquote"
   */
  type: 'blockquote';

  /**
   * Content of the block
   */
  blocks: RichBlock[];

  /**
   * Optional. Credit of the block
   */
  credit?: RichText;
};
