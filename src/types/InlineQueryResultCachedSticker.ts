import { InlineKeyboardMarkup, InputMessageContent } from './';

/**
 * ## InlineQueryResultCachedSticker
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
 */
export type InlineQueryResultCachedSticker = {
  type: 'sticker';
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
