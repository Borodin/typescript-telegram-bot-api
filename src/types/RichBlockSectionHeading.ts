import { RichText } from './';

/**
 * ## RichBlockSectionHeading
 * A section heading, corresponding to the HTML tags <h1>, <h2>, <h3>, <h4>, <h5>, or <h6>.
 * @see https://core.telegram.org/bots/api#richblocksectionheading
 */
export type RichBlockSectionHeading = {
  /**
   * Type of the block, always "heading"
   */
  type: 'heading';

  /**
   * Text of the block
   */
  text: RichText;

  /**
   * Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest
   */
  size: number;
};
