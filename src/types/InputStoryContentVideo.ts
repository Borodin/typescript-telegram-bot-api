import { InputFile } from './InputFile';

/**
 * ## InputStoryContentVideo
 * Describes a video to post as a story.
 * @see https://core.telegram.org/bots/api#inputstorycontentvideo
 */
export type InputStoryContentVideo = {
  /**
   * Type of the content, must be video
   */
  type: 'video';

  /**
   * The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec,
   * with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can
   * only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the video was uploaded using
   * multipart/form-data under <file_attach_name>.
   */
  video: InputFile | string;

  /**
   * Optional. Precise duration of the video in seconds; 0-60
   */
  duration?: number;

  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.
   */
  cover_frame_timestamp?: number;

  /**
   * Optional. Pass True if the video has no sound
   */
  is_animation?: boolean;
};
