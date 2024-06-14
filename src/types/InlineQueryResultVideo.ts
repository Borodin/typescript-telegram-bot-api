import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultVideo = {
  type: 'video';
  id: string;
  video_url: string;
  mime_type: string;
  thumbnail_url: string;
  title: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
