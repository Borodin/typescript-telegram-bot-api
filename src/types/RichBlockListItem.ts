import { RichBlock } from './';

/**
 * ## RichBlockListItem
 * An item of a list.
 * @see https://core.telegram.org/bots/api#richblocklistitem
 */
export type RichBlockListItem = {
  /**
   * Label of the item
   */
  label: string;

  /**
   * The content of the item
   */
  blocks: RichBlock[];

  /**
   * Optional. True, if the item has a checkbox
   */
  has_checkbox?: true;

  /**
   * Optional. True, if the item has a checked checkbox
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
