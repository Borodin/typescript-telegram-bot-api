import { InlineKeyboardMarkup, InputMessageContent } from './';

export type InlineQueryResultArticle = {
  type: 'article';
  id: string;
  title: string;
  input_message_content: InputMessageContent;
  reply_markup?: InlineKeyboardMarkup;
  url?: string;
  hide_url?: boolean;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};
