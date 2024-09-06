import { MessageEntity, InlineKeyboardMarkup, InputMessageContent, ParseMode } from './';

/**
 * ## InlineQueryResultVoice
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will
 * be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content
 * instead of the the voice message.
 * @see https://core.telegram.org/bots/api#inlinequeryresultvoice
 */
export type InlineQueryResultVoice = {

  /**
   * Type of the result, must be voice
   */
  type: 'voice';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the voice recording
   */
  voice_url: string;

  /**
   * Recording title
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
   * Optional. Recording duration in seconds
   */
  voice_duration?: number;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the voice recording
   */
  input_message_content?: InputMessageContent;
};
