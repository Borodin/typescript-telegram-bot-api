import { MessageEntity, InlineKeyboardMarkup, InputMessageContent, ParseMode } from './';

/**
 * ## InlineQueryResultCachedVoice
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by
 * the user. Alternatively, you can use input_message_content to send a message with the specified content instead of
 * the voice message.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedvoice
 */
export type InlineQueryResultCachedVoice = {
  /**
   * Type of the result, must be voice
   */
  type: 'voice';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the voice message
   */
  voice_file_id: string;

  /**
   * Voice message title
   */
  title: string;

  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the voice message
   */
  input_message_content?: InputMessageContent;
};
