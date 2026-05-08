import {
  InputMediaAnimation,
  InputMediaAudio,
  InputMediaDocument,
  InputMediaLivePhoto,
  InputMediaLocation,
  InputMediaPhoto,
  InputMediaVenue,
  InputMediaVideo,
} from './';

/**
 * ## InputPollMedia
 * This object represents the content of a poll description or a quiz explanation to be sent. It should be one of
 * - InputMediaAnimation
 * - InputMediaAudio
 * - InputMediaDocument
 * - InputMediaLivePhoto
 * - InputMediaLocation
 * - InputMediaPhoto
 * - InputMediaVenue
 * - InputMediaVideo
 * @see https://core.telegram.org/bots/api#inputpollmedia
 */
export type InputPollMedia =
  | InputMediaAnimation
  | InputMediaAudio
  | InputMediaDocument
  | InputMediaLivePhoto
  | InputMediaLocation
  | InputMediaPhoto
  | InputMediaVenue
  | InputMediaVideo;
