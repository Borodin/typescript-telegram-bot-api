import { MessageEntity, InlineKeyboardMarkup, InputMessageContent, ParseMode } from './';

/**
 * ## InlineQueryResultDocument
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively,
 * you can use input_message_content to send a message with the specified content instead of the file. Currently, only
 * .PDF and .ZIP files can be sent using this method.
 * @see https://core.telegram.org/bots/api#inlinequeryresultdocument
 */
export type InlineQueryResultDocument = {
  /**
   * Type of the result, must be document
   */
  type: 'document';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * A valid URL for the file
   */
  document_url: string;

  /**
   * String	MIME type of the content of the file, either “application/pdf” or “application/zip”
   */
  mime_type: 'application/pdf' | 'application/zip';

  /**
   * Optional. Short description of the result
   */
  description?: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the file
   */
  input_message_content?: InputMessageContent;

  /**
   * Optional. URL of the thumbnail (JPEG only) for the file
   */
  thumbnail_url?: string;

  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number;
};
