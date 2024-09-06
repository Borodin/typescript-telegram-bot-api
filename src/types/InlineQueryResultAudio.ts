import { MessageEntity, InlineKeyboardMarkup, InputMessageContent, ParseMode } from './';

/**
 * ## InlineQueryResultAudio
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can
 * use input_message_content to send a message with the specified content instead of the audio.
 * @see https://core.telegram.org/bots/api#inlinequeryresultaudio
 */
export type InlineQueryResultAudio = {

  /**
   * Type of the result, must be audio
   */
  type: 'audio';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the audio file
   */
  audio_url: string;

  /**
   * Title
   */
  title: string;

  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Performer
   */
  performer?: string;

  /**
   * Optional. Audio duration in seconds
   */
  audio_duration?: number;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the audio
   */
  input_message_content?: InputMessageContent;
};
