import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultCachedVoice = {
  type: 'voice';
  id: string;
  voice_file_id: string;
  title: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
