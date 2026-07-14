import { RichText } from './';

/**
 * ## InputRichBlockPreformatted
 * A preformatted text block, corresponding to the nested HTML tags <pre> and <code>.
 * @see https://core.telegram.org/bots/api#inputrichblockpreformatted
 */
export type InputRichBlockPreformatted = {
  /**
   * Type of the block, always "pre"
   */
  type: 'pre';

  /**
   * Text of the block
   */
  text: RichText;

  /**
   * Optional. The programming language of the text
   */
  language?: string;
};
