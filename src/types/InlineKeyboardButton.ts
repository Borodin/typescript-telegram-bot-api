import {
  CallbackGame,
  WebAppData,
  LoginUrl,
  SwitchInlineQueryChosenChat,
} from './';

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
