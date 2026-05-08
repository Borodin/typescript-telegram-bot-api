import { Attachment } from './';

/**
 * ## InputMediaSticker
 * Represents a sticker file to be sent.
 * @see https://core.telegram.org/bots/api#inputmediasticker
 */
export type InputMediaSticker = {
  /**
   * Type of the result, must be sticker
   */
  type: 'sticker';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL
   * for Telegram to get a .WEBP sticker from the Internet, or pass “attach://<file_attach_name>” to upload a new
   * .WEBP, .TGS, or .WEBM sticker using multipart/form-data under <file_attach_name> name.
   * [More information on Sending Files](https://core.telegram.org/bots/api#sending-files)
   */
  media: string | Attachment;

  /**
   * Optional. Emoji associated with the sticker; only for just uploaded stickers
   */
  emoji?: string;
};
