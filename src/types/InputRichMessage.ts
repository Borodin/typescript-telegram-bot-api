import { InputRichBlock, InputRichMessageMedia } from './';
import { AtMostOne } from '../utils';

/**
 * ## InputRichMessage
 * Describes a rich message to be sent. Exactly one of the fields html, markdown, or blocks must be used.
 * @see https://core.telegram.org/bots/api#inputrichmessage
 */
export type InputRichMessage = AtMostOne<{
  /**
   * Optional. Content of the rich message to send described as a list of blocks
   */
  blocks: InputRichBlock[];

  /**
   * Optional. Content of the rich message to send described using HTML formatting. See rich message formatting options
   * for more details. Use media field to specify the media used in the message.
   */
  html: string;

  /**
   * Optional. Content of the rich message to send described using Markdown formatting. See rich message formatting
   * options for more details. Use media field to specify the media used in the message.
   */
  markdown: string;
}> & {
  /**
   * Optional. List of media that are specified in the markdown or html fields using tg://photo?id=, tg://video?id=,
   * and tg://audio?id= links
   */
  media?: InputRichMessageMedia[];

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
