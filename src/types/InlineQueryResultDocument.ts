import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultDocument = {
  type: 'document';
  id: string;
  title: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  document_url: string;
  mime_type: 'application/pdf' | 'application/zip';
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
};
