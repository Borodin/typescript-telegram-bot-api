/**
 * ## GiftBackground
 * This object describes the background of a gift.
 * @see https://core.telegram.org/bots/api#giftbackground
 */
export type GiftBackground = {
  /**
   * Center color of the background in RGB format
   */
  center_color: number;

  /**
   * Edge color of the background in RGB format
   */
  edge_color: number;

  /**
   * Text color of the background in RGB format
   */
  text_color: number;
};
