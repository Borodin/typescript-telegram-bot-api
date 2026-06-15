import {
  InputMediaAnimation,
  InputMediaLink,
  InputMediaLivePhoto,
  InputMediaLocation,
  InputMediaPhoto,
  InputMediaSticker,
  InputMediaVenue,
  InputMediaVideo,
} from './';

/**
 * ## InputPollOptionMedia
 * This object represents the content of a poll option to be sent. It should be one of
 * - InputMediaAnimation
 * - InputMediaLink
 * - InputMediaLivePhoto
 * - InputMediaLocation
 * - InputMediaPhoto
 * - InputMediaSticker
 * - InputMediaVenue
 * - InputMediaVideo
 * @see https://core.telegram.org/bots/api#inputpolloptionmedia
 */
export type InputPollOptionMedia =
  | InputMediaAnimation
  | InputMediaLink
  | InputMediaLivePhoto
  | InputMediaLocation
  | InputMediaPhoto
  | InputMediaSticker
  | InputMediaVenue
  | InputMediaVideo;
