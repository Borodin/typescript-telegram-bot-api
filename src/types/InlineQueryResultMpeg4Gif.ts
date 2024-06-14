import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultMpeg4Gif = {
  type: 'mpeg4_gif';
  id: string;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumbnail_url: string;
  thumbnail_mime_type: 'image/jpeg' | 'image/gif' | 'video/mp4';
  title?: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
