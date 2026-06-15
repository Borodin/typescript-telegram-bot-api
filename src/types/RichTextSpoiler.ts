import { RichText } from './';

/**
 * ## RichTextSpoiler
 * A text covered by a spoiler.
 * @see https://core.telegram.org/bots/api#richtextspoiler
 */
export type RichTextSpoiler = {
  /**
   * Type of the rich text, always "spoiler"
   */
  type: 'spoiler';

  /**
   * The text
   */
  text: RichText;
};
