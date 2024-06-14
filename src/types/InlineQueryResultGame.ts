import { InlineKeyboardMarkup } from './';

export type InlineQueryResultGame = {
  type: 'game';
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
};
