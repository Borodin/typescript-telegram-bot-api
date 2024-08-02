import {
  CallbackGame,
  WebAppData,
  LoginUrl,
  SwitchInlineQueryChosenChat,
} from './';

/**
 * ## InlineKeyboardButton
 * This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
 * @see https://core.telegram.org/bots/api#inlinekeyboardbutton
 */
export type InlineKeyboardButton = {
  text: string;
  url?: string;
  callback_data?: string;
  web_app?: WebAppData;
  login_url?: LoginUrl;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
  callback_game?: CallbackGame;
  pay?: boolean;
};
