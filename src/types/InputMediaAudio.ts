import { InputFile, MessageEntity, ParseMode } from './';

export type InputMediaAudio = {
  type: 'audio';
  media: string;
  thumbnail?: InputFile | string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  duration: number;
  performer?: string;
  title?: string;
};
