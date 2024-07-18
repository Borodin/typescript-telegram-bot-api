import { Attachment, InputFile, MessageEntity, ParseMode } from './';

export type InputMediaDocument = {
  type: 'document';
  media: string | Attachment;
  thumbnail?: InputFile | string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  disable_content_type_detection?: boolean;
};
