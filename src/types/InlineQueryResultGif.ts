import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultGif = {
  type: 'gif';
  id: string;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
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
