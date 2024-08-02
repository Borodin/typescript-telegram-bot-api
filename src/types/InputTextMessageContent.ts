import { MessageEntity, LinkPreviewOptions, ParseMode } from './';

/**
 * ## InputTextMessageContent
 * Represents the content of a text message to be sent as the result of an inline query.
 * @see https://core.telegram.org/bots/api#inputtextmessagecontent
 */
export type InputTextMessageContent = {
  message_text: string;
  parse_mode?: ParseMode;
  entities?: MessageEntity[];
  link_preview_options?: LinkPreviewOptions;
};
