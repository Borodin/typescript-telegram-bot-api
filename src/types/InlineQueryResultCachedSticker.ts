import { InlineKeyboardMarkup, InputMessageContent } from './';

export type InlineQueryResultCachedSticker = {
  type: 'sticker';
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};
