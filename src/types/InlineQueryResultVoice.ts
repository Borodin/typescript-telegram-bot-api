import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

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
