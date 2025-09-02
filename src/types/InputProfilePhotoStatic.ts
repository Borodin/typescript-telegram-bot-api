/**
 * ## InputProfilePhotoStatic
 * Represents a static profile photo in the .JPG format.
 * @see https://core.telegram.org/bots/api#inputprofilephotostatic
 */
export type InputProfilePhotoStatic = {
  /**
   * Type of the profile photo, must be 'static'
   */
  type: 'static';

  /**
   * The static profile photo. Profile photos can't be reused and can only be
   * uploaded as a new file, so you can pass “attach://<file_attach_name>” if
   * the photo was uploaded using multipart/form-data under <file_attach_name>.
   */
  photo: string;
};
