import { InlineKeyboardButton } from './';

/**
 * ## InlineKeyboardMarkup
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 * @see https://core.telegram.org/bots/api#inlinekeyboardmarkup
 */
export type InlineKeyboardMarkup = {
  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects
   */
  inline_keyboard: InlineKeyboardButton[][];
};
