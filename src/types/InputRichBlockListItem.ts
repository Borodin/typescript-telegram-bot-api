import { InputRichBlock } from './';

/**
 * ## InputRichBlockListItem
 * An item of a list to be sent.
 * @see https://core.telegram.org/bots/api#inputrichblocklistitem
 */
export type InputRichBlockListItem = {
  /**
   * The content of the item
   */
  blocks: InputRichBlock[];

  /**
   * Optional. Pass True if the item has a checkbox
   */
  has_checkbox?: true;

  /**
   * Optional. Pass True if the item has a checked checkbox
   */
  is_checked?: true;

  /**
   * Optional. For ordered lists, the numeric value of the item label
   */
  value?: number;

  /**
   * Optional. For ordered lists, the type of the item label; must be one of "a" for lowercase letters, "A" for
   * uppercase letters, "i" for lowercase Roman numerals, "I" for uppercase Roman numerals, or "1" for decimal numbers
   */
  type?: 'a' | 'A' | 'i' | 'I' | '1';
};
