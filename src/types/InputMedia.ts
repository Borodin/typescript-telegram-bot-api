import {
  InputMediaAnimation,
  InputMediaDocument,
  InputMediaAudio,
  InputMediaPhoto,
  InputMediaVideo,
} from './';

export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;
