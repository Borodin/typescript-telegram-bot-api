import { InputRichBlockListItem } from './';

/**
 * ## InputRichBlockList
 * A list of blocks, corresponding to the HTML tag <ul> or <ol> with multiple nested tags <li>.
 * @see https://core.telegram.org/bots/api#inputrichblocklist
 */
export type InputRichBlockList = {
  /**
   * Type of the block, always "list"
   */
  type: 'list';

  /**
   * Items of the list
   */
  items: InputRichBlockListItem[];
};
