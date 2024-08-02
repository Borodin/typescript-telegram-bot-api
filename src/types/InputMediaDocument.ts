import { Attachment, InputFile, MessageEntity, ParseMode } from './';

/**
 * ## InputMediaDocument
 * Represents a general file to be sent.
 * @see https://core.telegram.org/bots/api#inputmediadocument
 */
export type InputMediaDocument = {
  type: 'document';
  media: string | Attachment;
  thumbnail?: InputFile | string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  disable_content_type_detection?: boolean;
};
