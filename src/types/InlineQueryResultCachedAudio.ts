import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

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
