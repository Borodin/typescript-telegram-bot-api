import { RichBlock } from './';

/**
 * ## RichMessage
 * Rich formatted message.
 * @see https://core.telegram.org/bots/api#richmessage
 */
export type RichMessage = {
  /**
   * Content of the message
   */
  blocks: RichBlock[];

  /**
   * Optional. True, if the rich message must be shown right-to-left
   */
  is_rtl?: boolean;
};
