import { InputFile } from './InputFile';

/**
 * InputPaidMediaVideo
 * The paid media to send is a video.
 * @see https://core.telegram.org/bots/api#inputpaidmediavideo
 */

export type InputPaidMediaVideo = {
  /**
   * Type of the media, must be video
   */
  type: 'video';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for
   * Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
   * multipart/form-data under <file_attach_name> name.
   * @see https://core.telegram.org/bots/api#sending-files
   */
  media: string;

  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not
   * exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be
   * only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using
   * multipart/form-data under <file_attach_name>.
   * @see https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: InputFile | string;

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
