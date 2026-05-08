import { Animation, Audio, Document, LivePhoto, Location, PhotoSize, Sticker, Venue, Video } from './';

/**
 * ## PollMedia
 * At most one of the optional fields can be present in any given object.
 * @see https://core.telegram.org/bots/api#pollmedia
 */
export type PollMedia = {
  /**
   * Optional. Media is an animation, information about the animation
   */
  animation?: Animation;

  /**
   * Optional. Media is an audio file, information about the file; currently, can't be received in a poll option
   */
  audio?: Audio;

  /**
   * Optional. Media is a general file, information about the file; currently, can't be received in a poll option
   */
  document?: Document;

  /**
   * Optional. Media is a live photo, information about the live photo
   */
  live_photo?: LivePhoto;

  /**
   * Optional. Media is a shared location, information about the location
   */
  location?: Location;

  /**
   * Optional. Media is a photo, available sizes of the photo
   */
  photo?: PhotoSize[];

  /**
   * Optional. Media is a sticker, information about the sticker; currently, for poll options only
   */
  sticker?: Sticker;

  /**
   * Optional. Media is a venue, information about the venue
   */
  venue?: Venue;

  /**
   * Optional. Media is a video, information about the video
   */
  video?: Video;
};
