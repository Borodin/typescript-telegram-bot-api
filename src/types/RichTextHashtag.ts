import { RichText } from './';

/**
 * ## RichTextHashtag
 * A hashtag.
 * @see https://core.telegram.org/bots/api#richtexthashtag
 */
export type RichTextHashtag = {
  /**
   * Type of the rich text, always "hashtag"
   */
  type: 'hashtag';

  /**
   * The text
   */
  text: RichText;

  /**
   * The hashtag
   */
  hashtag: string;
};
