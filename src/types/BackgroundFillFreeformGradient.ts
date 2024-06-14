/**
 * ## BackgroundFillFreeformGradient
 * The background is a freeform gradient that rotates after every message in the chat.
 * @see https://core.telegram.org/bots/api#backgroundfillfreeformgradient
 */

export type BackgroundFillFreeformGradient = {
  type: 'freeform_gradient';
  colors: [number, number, number] | [number, number, number, number];
};
