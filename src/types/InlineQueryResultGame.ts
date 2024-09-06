import { InlineKeyboardMarkup } from './';

/**
 * ## InlineQueryResultGame
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively,
 * you can use input_message_content to send a message with the specified content instead of the photo.
 * @see https://core.telegram.org/bots/api#inlinequeryresultgame
 */
export type InlineQueryResultGame = {
  /**
   * Type of the result, must be game
   */
  type: 'game';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Short name of the game
   */
  game_short_name: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;
};
