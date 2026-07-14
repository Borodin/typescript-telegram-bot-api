import { Attachment, MessageEntity, ParseMode } from './';

/**
 * ## InputMediaVoiceNote
 * Represents a voice message file to be sent.
 * @see https://core.telegram.org/bots/api#inputmediavoicenote
 */
export type InputMediaVoiceNote = {
  /**
   * Type of the media, must be voice_note
   */
  type: 'voice_note';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL
   * for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
   * multipart/form-data under <file_attach_name> name. [More information on Sending Files](https://core.telegram.org/bots/api#sending-files)
   */
  media: string | Attachment;

  /**
   * Optional. Caption of the voice message to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Duration of the voice message in seconds
   */
  duration?: number;
};
