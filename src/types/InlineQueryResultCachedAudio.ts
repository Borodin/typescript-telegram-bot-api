import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

/**
 * ## InlineQueryResultCachedAudio
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedaudio
 */
export type InlineQueryResultCachedAudio = {
  type: 'audio';
  id: string;
  audio_file_id: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
