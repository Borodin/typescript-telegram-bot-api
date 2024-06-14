import {
  MessageEntity,
  InlineKeyboardMarkup,
  InputMessageContent,
  ParseMode,
} from './';

export type InlineQueryResultCachedDocument = {
  type: 'document';
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
