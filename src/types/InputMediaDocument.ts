import { InputFile, MessageEntity, ParseMode } from './';

export type InputMediaDocument = {
  type: 'document';
  media: string;
  thumbnail?: InputFile | string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  disable_content_type_detection?: boolean;
};
