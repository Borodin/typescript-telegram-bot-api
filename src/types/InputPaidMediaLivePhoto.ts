import { Attachment } from './index';

/**
 * InputPaidMediaLivePhoto
 * The paid media to send is a live photo.
 * @see https://core.telegram.org/bots/api#inputpaidmedialivephoto
 */
export type InputPaidMediaLivePhoto = {
  /**
   * Type of the media, must be live_photo
   */
  type: 'live_photo';

  /**
   * Video of the live photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended)
   * or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
   * Sending live photos by a URL is currently unsupported.
   * @see https://core.telegram.org/bots/api#sending-files
   */
  media: string | Attachment;

  /**
   * The static photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass
   * “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Sending
   * live photos by a URL is currently unsupported.
   * @see https://core.telegram.org/bots/api#sending-files
   */
  photo: string | Attachment;
};
