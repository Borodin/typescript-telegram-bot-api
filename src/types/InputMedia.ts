import {
  InputMediaAnimation,
  InputMediaDocument,
  InputMediaAudio,
  InputMediaLivePhoto,
  InputMediaPhoto,
  InputMediaVideo,
} from './';

/**
 * ## InputMedia
 * This object represents the content of a media message to be sent. It should be one of
 * - InputMediaAnimation
 * - InputMediaAudio
 * - InputMediaDocument
 * - InputMediaLivePhoto
 * - InputMediaPhoto
 * - InputMediaVideo
 * @see https://core.telegram.org/bots/api#inputmedia
 */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaLivePhoto
  | InputMediaPhoto
  | InputMediaVideo;
