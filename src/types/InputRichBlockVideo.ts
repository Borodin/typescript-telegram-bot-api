import { InputMediaVideo, RichBlockCaption } from './';

/**
 * ## InputRichBlockVideo
 * A block with a video, corresponding to the HTML tag <video>.
 * @see https://core.telegram.org/bots/api#inputrichblockvideo
 */
export type InputRichBlockVideo = {
  /**
   * Type of the block, always "video"
   */
  type: 'video';

  /**
   * The video. Caption is ignored.
   */
  video: InputMediaVideo;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
