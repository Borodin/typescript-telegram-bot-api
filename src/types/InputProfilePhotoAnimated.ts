/**
 * ## InputProfilePhotoAnimated
 * Represents an animated profile photo.
 * @see https://core.telegram.org/bots/api#inputprofilephotoanimated
 */
export type InputProfilePhotoAnimated = {
  /**
   * Type of the profile photo, must be 'animated'
   */
  type: 'animated';

  /**
   * The animated profile photo. Use “attach://<file_attach_name>” if uploaded
   * via multipart/form-data.
   */
  animation: string;

  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static
   * profile photo. Defaults to 0.0.
   */
  main_frame_timestamp?: number;
};
