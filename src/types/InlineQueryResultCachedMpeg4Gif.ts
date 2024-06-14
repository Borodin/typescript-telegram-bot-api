import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultCachedMpeg4Gif = {
  type: 'mpeg4_gif';
  id: string;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
