import { RichBlockCaption, Video } from './';

/**
 * ## RichBlockVideo
 * A block with a video, corresponding to the HTML tag <video>.
 * @see https://core.telegram.org/bots/api#richblockvideo
 */
export type RichBlockVideo = {
  /**
   * Type of the block, always "video"
   */
  type: 'video';

  /**
   * The video
   */
  video: Video;

  /**
   * Optional. True, if the media preview is covered by a spoiler animation
   */
  has_spoiler?: true;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
