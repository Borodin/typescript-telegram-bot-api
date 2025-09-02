/**
 * ## UniqueGiftBackdropColors
 * This object describes the colors of the backdrop of a unique gift.
 * @see https://core.telegram.org/bots/api#uniquegiftbackdropcolors
 */
export type UniqueGiftBackdropColors = {
  /**
   * The color in the center of the backdrop in RGB format
   */
  center_color: number;

  /**
   * The color on the edges of the backdrop in RGB format
   */
  edge_color: number;

  /**
   * The color to be applied to the symbol in RGB format
   */
  symbol_color: number;

  /**
   * The color for the text on the backdrop in RGB format
   */
  text_color: number;
};
