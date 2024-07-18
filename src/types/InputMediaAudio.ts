import { Attachment, InputFile, MessageEntity, ParseMode } from './';

export type InputMediaAudio = {
  type: 'audio';
  media: string | Attachment;
  thumbnail?: InputFile | string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  duration?: number;
  performer?: string;
  title?: string;
};
