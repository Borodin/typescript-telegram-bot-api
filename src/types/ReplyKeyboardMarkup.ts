import { KeyboardButton } from './KeyboardButton';

export type ReplyKeyboardMarkup = {
  keyboard?: KeyboardButton[][];
  is_persistent?: boolean;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
};
