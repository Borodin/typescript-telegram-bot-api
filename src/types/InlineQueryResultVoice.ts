import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

/**
 * ## InlineQueryResultVoice
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 * @see https://core.telegram.org/bots/api#inlinequeryresultvoice
 */
export type InlineQueryResultVoice = {
  type: 'voice';
  id: string;
  voice_url: string;
  title: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  voice_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
