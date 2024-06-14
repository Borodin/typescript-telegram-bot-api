import {
  InlineQueryResultVoice,
  InlineQueryResultVideo,
  InlineQueryResultVenue,
  InlineQueryResultPhoto,
  InlineQueryResultMpeg4Gif,
  InlineQueryResultLocation,
  InlineQueryResultGif,
  InlineQueryResultDocument,
  InlineQueryResultGame,
  InlineQueryResultContact,
  InlineQueryResultAudio,
  InlineQueryResultArticle,
  InlineQueryResultCachedVoice,
  InlineQueryResultCachedVideo,
  InlineQueryResultCachedSticker,
  InlineQueryResultCachedPhoto,
  InlineQueryResultCachedMpeg4Gif,
  InlineQueryResultCachedGif,
  InlineQueryResultCachedDocument,
  InlineQueryResultCachedAudio,
} from './';

export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;
