import { RichBlock, RichText } from './';

/**
 * ## RichBlockDetails
 * An expandable block for details disclosure, corresponding to the HTML tag <details>.
 * @see https://core.telegram.org/bots/api#richblockdetails
 */
export type RichBlockDetails = {
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
  blocks: RichBlock[];

  /**
   * Optional. True, if the content of the block is visible by default
   */
  is_open?: true;
};
