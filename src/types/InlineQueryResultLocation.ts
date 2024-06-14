import { InlineKeyboardMarkup, InputMessageContent } from './';

export type InlineQueryResultLocation = {
  type: 'location';
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
};
