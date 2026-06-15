import { RichText } from './';

/**
 * ## RichBlockParagraph
 * A text paragraph, corresponding to the HTML tag <p>.
 * @see https://core.telegram.org/bots/api#richblockparagraph
 */
export type RichBlockParagraph = {
  /**
   * Type of the block, always "paragraph"
   */
  type: 'paragraph';

  /**
   * Text of the block
   */
  text: RichText;
};
