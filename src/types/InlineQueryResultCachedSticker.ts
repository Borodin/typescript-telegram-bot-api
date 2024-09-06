import { InlineKeyboardMarkup, InputMessageContent } from './';

/**
 * ## InlineQueryResultCachedSticker
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
 */
export type InlineQueryResultCachedSticker = {

  /**
   * Type of the result, must be sticker
   */
  type: 'sticker';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier of the sticker
   */
  sticker_file_id: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the sticker
   */
  input_message_content?: InputMessageContent;
};
