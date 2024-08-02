import { InlineKeyboardMarkup } from './';

/**
 * ## InlineQueryResultGame
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * @see https://core.telegram.org/bots/api#inlinequeryresultgame
 */
export type InlineQueryResultGame = {
  type: 'game';
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
};
