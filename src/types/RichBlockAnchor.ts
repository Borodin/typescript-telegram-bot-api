/**
 * ## RichBlockAnchor
 * A block with an anchor, corresponding to the HTML tag <a> with the attribute name.
 * @see https://core.telegram.org/bots/api#richblockanchor
 */
export type RichBlockAnchor = {
  /**
   * Type of the block, always "anchor"
   */
  type: 'anchor';

  /**
   * The name of the anchor
   */
  name: string;
};
