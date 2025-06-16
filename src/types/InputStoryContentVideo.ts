/**
 * ## InputStoryContentVideo
 * Represents a video to be used as story content.
 * @see https://core.telegram.org/bots/api#inputstorycontentvideo
 */
export type InputStoryContentVideo = {
  /**
   * Type of the story content, must be 'video'
   */
  type: 'video';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram
   * servers (recommended), pass an HTTP URL for Telegram to get a file from the
   * Internet, or pass “attach://<file_attach_name>” to upload a new one using
   * multipart/form-data under <file_attach_name> name.
   */
  media: string;

  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail
   * generation for the file is supported server-side. The thumbnail should be
   * in JPEG format and less than 200 kB in size. A thumbnail's width and height
   * should not exceed 320. Thumbnails can't be reused and can be only uploaded
   * as a new file, so you can pass “attach://<file_attach_name>” if the
   * thumbnail was uploaded using multipart/form-data under <file_attach_name>.
   */
  thumbnail?: string;

  /**
   * Optional. Video width
   */
  width?: number;

  /**
   * Optional. Video height
   */
  height?: number;

  /**
   * Optional. Video duration in seconds
   */
  duration?: number;

  /**
   * Optional. Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean;
};
