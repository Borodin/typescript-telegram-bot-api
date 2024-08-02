import { Attachment, MessageEntity, ParseMode } from './';

/**
 * ## InputMediaPhoto
 * Represents a photo to be sent.
 * @see https://core.telegram.org/bots/api#inputmediaphoto
 */
export type InputMediaPhoto = {
  type: 'photo';
  media: string | Attachment;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  has_spoiler?: boolean;
};
