import { RichMessageButton } from './';

/**
 * ## RichBlockButtons
 * A block containing a list of buttons that are shown in one row, corresponding to the custom HTML tag
 * <tg-button-row>.
 * @see https://core.telegram.org/bots/api#richblockbuttons
 */
export type RichBlockButtons = {
  /**
   * Type of the block, always "buttons"
   */
  type: 'buttons';

  /**
   * The buttons
   */
  buttons: RichMessageButton[];

  /**
   * Optional. Horizontal alignment of the buttons. Currently, must be one of "left", "center", or "right".
   */
  align?: 'left' | 'center' | 'right';
};
