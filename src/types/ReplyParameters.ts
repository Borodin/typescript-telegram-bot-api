import { ParseMode } from './index';

export type ReplyParameters = {
  message_id: number;
  chat_id?: number | string;
  allow_sending_without_reply?: boolean;
  quote?: string;
  quote_parse_mode?: ParseMode;
  quote_entities?: string; // todo: JSON 	Array of MessageEntity
  quote_position?: number;
};
