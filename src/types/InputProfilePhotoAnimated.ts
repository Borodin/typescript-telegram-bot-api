import { InputFile } from './InputFile';

/**
 * ## InputProfilePhotoAnimated
 * An animated profile photo in the MPEG4 format.
 * @see https://core.telegram.org/bots/api#inputprofilephotoanimated
 */
export type InputProfilePhotoAnimated = {
  /**
   * Type of the profile photo, must be animated
   */
  type: 'animated';

  /**
   * The animated profile photo. Use “attach://<file_attach_name>” if uploaded
   * via multipart/form-data.
   */
  animation: InputFile | string;

  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.
   */
  main_frame_timestamp?: number;
};
