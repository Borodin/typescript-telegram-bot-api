import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultAudio = {
  type: 'audio';
  id: string;
  audio_url: string;
  title: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  performer?: string;
  audio_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
