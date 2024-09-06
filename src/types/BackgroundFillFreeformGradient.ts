/**
 * ## BackgroundFillFreeformGradient
 * The background is a freeform gradient that rotates after every message in the chat.
 * @see https://core.telegram.org/bots/api#backgroundfillfreeformgradient
 */
export type BackgroundFillFreeformGradient = {

  /**
   * Type of the background fill, always `freeform_gradient`
   */
  type: 'freeform_gradient';

  /**
   * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
   */
  colors: [number, number, number] | [number, number, number, number];
};
