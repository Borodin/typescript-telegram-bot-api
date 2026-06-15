import { RichText } from './';

/**
 * ## RichTextAnchorLink
 * A link to an anchor.
 * @see https://core.telegram.org/bots/api#richtextanchorlink
 */
export type RichTextAnchorLink = {
  /**
   * Type of the rich text, always "anchor_link"
   */
  type: 'anchor_link';

  /**
   * The link text
   */
  text: RichText;

  /**
   * The name of the anchor. If the name is empty, then the link brings back to the top of the message.
   */
  anchor_name: string;
};
