import {
  InputMediaAnimation,
  InputMediaDocument,
  InputMediaAudio,
  InputMediaPhoto,
  InputMediaVideo,
} from './';

/**
 * ## InputMedia
 * This object represents the content of a media message to be sent. It should be one of
 * - InputMediaAnimation
 * - InputMediaDocument
 * - InputMediaAudio
 * - InputMediaPhoto
 * - InputMediaVideo
 * @see https://core.telegram.org/bots/api#inputmedia
 */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;
