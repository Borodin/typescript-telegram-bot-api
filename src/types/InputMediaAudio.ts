import { Attachment, InputFile, MessageEntity, ParseMode } from './';

/**
 * ## InputMediaAudio
 * Represents an audio file to be treated as music to be sent.
 * @see https://core.telegram.org/bots/api#inputmediaaudio
 */
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
