import { RichText } from './';

/**
 * ## RichBlockPreformatted
 * A preformatted text block, corresponding to the nested HTML tags <pre> and <code>.
 * @see https://core.telegram.org/bots/api#richblockpreformatted
 */
export type RichBlockPreformatted = {
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
