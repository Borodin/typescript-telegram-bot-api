import { Attachment, MessageEntity, ParseMode } from './';

/**
 * ## InputMediaLivePhoto
 * Represents a live photo to be sent.
 * @see https://core.telegram.org/bots/api#inputmedialivephoto
 */
export type InputMediaLivePhoto = {
  /**
   * Type of the result, must be live_photo
   */
  type: 'live_photo';

  /**
   * Video of the live photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended)
   * or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
   * Sending live photos by a URL is currently unsupported.
   * [More information on Sending Files](https://core.telegram.org/bots/api#sending-files)
   */
  media: string | Attachment;

  /**
   * The static photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass
   * “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Sending
   * live photos by a URL is currently unsupported.
   * [More information on Sending Files](https://core.telegram.org/bots/api#sending-files)
   */
  photo: string | Attachment;

  /**
   * Optional. Caption of the live photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the live photo caption. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Optional. Pass True if the live photo needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean;
};
