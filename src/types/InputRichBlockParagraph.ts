import { RichText } from './';

/**
 * ## InputRichBlockParagraph
 * A text paragraph, corresponding to the HTML tag <p>.
 * @see https://core.telegram.org/bots/api#inputrichblockparagraph
 */
export type InputRichBlockParagraph = {
  /**
   * Type of the block, always "paragraph"
   */
  type: 'paragraph';

  /**
   * Text of the block
   */
  text: RichText;
};
