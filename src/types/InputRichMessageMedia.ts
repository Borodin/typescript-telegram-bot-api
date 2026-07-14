import { InputMediaAnimation, InputMediaAudio, InputMediaPhoto, InputMediaVideo, InputMediaVoiceNote } from './';

/**
 * ## InputRichMessageMedia
 * Describes a media element embedded in an outgoing rich message.
 * @see https://core.telegram.org/bots/api#inputrichmessagemedia
 */
export type InputRichMessageMedia = {
  /**
   * Unique identifier of the media used in a tg://photo?id=, tg://video?id=, or tg://audio?id= link. 1-64 characters,
   * only A-Z, a-z, 0-9, _ and - are allowed.
   */
  id: string;

  /**
   * The media to be sent. Everything except the media itself and its properties is ignored.
   */
  media: InputMediaAnimation | InputMediaAudio | InputMediaPhoto | InputMediaVideo | InputMediaVoiceNote;
};
