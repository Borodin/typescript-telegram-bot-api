import { ParseMode } from './';

export type InputPollOption = {
  text: string;
  text_parse_mode?: ParseMode;
  text_entities?: 'string'; // TODO: JSON MessageEntity[];
};
