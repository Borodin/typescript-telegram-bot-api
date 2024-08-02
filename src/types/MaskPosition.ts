/**
 * ## MaskPosition
 * This object describes the position on faces where a mask should be placed by default.
 * @see https://core.telegram.org/bots/api#maskposition
 */
export type MaskPosition = {
  point: 'forehead' | 'eyes' | 'mouth' | 'chin';
  x_shift: number;
  y_shift: number;
  scale: number;
};
