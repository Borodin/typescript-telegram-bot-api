/**
 * ## RichTextAnchor
 * An anchor.
 * @see https://core.telegram.org/bots/api#richtextanchor
 */
export type RichTextAnchor = {
  /**
   * Type of the rich text, always "anchor"
   */
  type: 'anchor';

  /**
   * The name of the anchor
   */
  name: string;
};
