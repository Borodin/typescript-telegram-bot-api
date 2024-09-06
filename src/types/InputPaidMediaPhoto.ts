/**
 * InputPaidMediaPhoto
 * The paid media to send is a photo.
 * @see https://core.telegram.org/bots/api#inputpaidmediaphoto
 */
export type InputPaidMediaPhoto = {

  /**
   * Type of the media, must be photo
   */
  type: 'photo';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for
   * Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
   * multipart/form-data under <file_attach_name> name.
   * @see https://core.telegram.org/bots/api#sending-files
   */
  media: string;
};
