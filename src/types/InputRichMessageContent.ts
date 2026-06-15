import { InputRichMessage } from './';

/**
 * ## InputRichMessageContent
 * Represents the content of a rich message to be sent as the result of an inline query.
 * @see https://core.telegram.org/bots/api#inputrichmessagecontent
 */
export type InputRichMessageContent = {
  /**
   * The message to be sent
   */
  rich_message: InputRichMessage;
};
