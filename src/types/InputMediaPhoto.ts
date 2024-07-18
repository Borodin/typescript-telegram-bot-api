import { Attachment, MessageEntity, ParseMode } from './';

export type InputMediaPhoto = {
  type: 'photo';
  media: string | Attachment;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  has_spoiler?: boolean;
};
