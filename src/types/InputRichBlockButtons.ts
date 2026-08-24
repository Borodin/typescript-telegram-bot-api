import { RichMessageButton } from './';

/**
 * ## InputRichBlockButtons
 * A block containing a list of buttons that are shown in one row, corresponding to the custom HTML tag
 * <tg-button-row>.
 * @see https://core.telegram.org/bots/api#inputrichblockbuttons
 */
export type InputRichBlockButtons = {
  /**
   * Type of the block, always "buttons"
   */
  type: 'buttons';

  /**
   * List of 1-8 buttons to send
   */
  buttons: RichMessageButton[];

  /**
   * Optional. Horizontal alignment of the buttons. Currently, must be one of "left", "center", or "right".
   */
  align?: 'left' | 'center' | 'right';
};
