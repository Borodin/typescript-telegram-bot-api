import { AtMostOne } from '../utils';

/**
 * ## InputRichMessage
 * Describes a rich message to be sent. Exactly one of the fields html or markdown must be used.
 * @see https://core.telegram.org/bots/api#inputrichmessage
 */
export type InputRichMessage = AtMostOne<{
  /**
   * Optional. Content of the rich message to send described using HTML formatting. See rich message formatting options
   * for more details.
   */
  html: string;

  /**
   * Optional. Content of the rich message to send described using Markdown formatting. See rich message formatting
   * options for more details.
   */
  markdown: string;
}> & {
  /**
   * Optional. Pass True if the rich message must be shown right-to-left
   */
  is_rtl?: boolean;

  /**
   * Optional. Pass True to skip automatic detection of entities (e.g., URLs, email addresses, username mentions,
   * hashtags, cashtags, bot commands, or phone numbers) in the text
   */
  skip_entity_detection?: boolean;
};
