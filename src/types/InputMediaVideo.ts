import { Attachment, InputFile, MessageEntity, ParseMode } from './';

export type InputMediaVideo = {
  type: 'video';
  media: string | Attachment;
  thumbnail?: InputFile | string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  width?: number;
  height?: number;
  duration?: number;
  supports_streaming?: boolean;
  has_spoiler?: boolean;
};
