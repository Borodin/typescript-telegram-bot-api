import { Video } from './Video';

/**
 * ## PaidMediaVideo
 * The paid media is a video.
 * @see https://core.telegram.org/bots/api#paidmediavideo
 */
export type PaidMediaVideo = {

  /**
   * Type of the paid media, always “video”
   */
  type: 'video';

  /**
   * The video
   */
  photo: Video[];
};
