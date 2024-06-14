import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultCachedVideo = {
  type: 'video';
  id: string;
  video_file_id: string;
  title: string;
  description?: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
