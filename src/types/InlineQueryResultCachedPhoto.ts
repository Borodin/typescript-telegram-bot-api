import { MessageEntity, InlineKeyboardMarkup, InputMessageContent, ParseMode } from './';

/**
 * ## InlineQueryResultCachedPhoto
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an
 * optional caption. Alternatively, you can use input_message_content to send a message with the specified content
 * instead of the photo.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
 */
export type InlineQueryResultCachedPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: 'photo';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier of the photo
   */
  photo_file_id: string;

  /**
   * Optional. Title for the result
   */
  title?: string;

  /**
   * Optional. Short description of the result
   */
  description?: string;

  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the photo
   */
  input_message_content?: InputMessageContent;
};
