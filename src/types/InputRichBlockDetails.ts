import { InputRichBlock, RichText } from './';

/**
 * ## InputRichBlockDetails
 * An expandable block for details disclosure, corresponding to the HTML tag <details>.
 * @see https://core.telegram.org/bots/api#inputrichblockdetails
 */
export type InputRichBlockDetails = {
  /**
   * Type of the block, always "details"
   */
  type: 'details';

  /**
   * Always shown summary of the block
   */
  summary: RichText;

  /**
   * Content of the block
   */
  blocks: InputRichBlock[];

  /**
   * Optional. Pass True if the content of the block is visible by default
   */
  is_open?: true;
};
