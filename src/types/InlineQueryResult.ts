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

/**
 * ## InlineQueryResult
 * This object represents one result of an inline query. Telegram clients currently support results of the following
 * 20 types:
 * - InlineQueryResultCachedAudio
 * - InlineQueryResultCachedDocument
 * - InlineQueryResultCachedGif
 * - InlineQueryResultCachedMpeg4Gif
 * - InlineQueryResultCachedPhoto
 * - InlineQueryResultCachedSticker
 * - InlineQueryResultCachedVideo
 * - InlineQueryResultCachedVoice
 * - InlineQueryResultArticle
 * - InlineQueryResultAudio
 * - InlineQueryResultContact
 * - InlineQueryResultGame
 * - InlineQueryResultDocument
 * - InlineQueryResultGif
 * - InlineQueryResultLocation
 * - InlineQueryResultMpeg4Gif
 * - InlineQueryResultPhoto
 * - InlineQueryResultVenue
 * - InlineQueryResultVideo
 * - InlineQueryResultVoice
 * @see https://core.telegram.org/bots/api#inlinequeryresult
 */
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
