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

  /**
   * Optional. Pass True if the reply interface must be shown to the user, as if they had manually selected the bot's
   * message and tapped 'Reply'. The value of the field can't be changed when the inline keyboard is edited.
   */
  force_reply?: boolean;
};
