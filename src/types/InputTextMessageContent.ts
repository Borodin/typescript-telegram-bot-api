import { MessageEntity, LinkPreviewOptions, ParseMode } from './';

/**
 * ## InputTextMessageContent
 * Represents the content of a text message to be sent as the result of an inline query.
 * @see https://core.telegram.org/bots/api#inputtextmessagecontent
 */
export type InputTextMessageContent = {
  /**
   * Text of the message to be sent, 1-4096 characters
   */
  message_text: string;

  /**
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Optional. Link preview generation options for the message
   */
  link_preview_options?: LinkPreviewOptions;
};
