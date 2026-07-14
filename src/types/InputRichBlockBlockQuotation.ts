import { InputRichBlock, RichText } from './';

/**
 * ## InputRichBlockBlockQuotation
 * A block quotation, corresponding to the HTML tag <blockquote>.
 * @see https://core.telegram.org/bots/api#inputrichblockblockquotation
 */
export type InputRichBlockBlockQuotation = {
  /**
   * Type of the block, always "blockquote"
   */
  type: 'blockquote';

  /**
   * Content of the block
   */
  blocks: InputRichBlock[];

  /**
   * Optional. Credit of the block
   */
  credit?: RichText;
};
