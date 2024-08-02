import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

/**
 * ## InlineQueryResultCachedDocument
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcacheddocument
 */
export type InlineQueryResultCachedDocument = {
  type: 'document';
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
