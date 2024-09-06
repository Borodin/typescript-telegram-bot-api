import { MessageEntity } from './';

/**
 * ## TextQuote
 * This object contains information about the quoted part of a message that is replied to by the given message.
 * @see https://core.telegram.org/bots/api#textquote
 */
export type TextQuote = {
  /**
   * Text of the quoted part of a message that is replied to by the given message
   */
  text: string;

  /**
   * Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough,
   * spoiler, and custom_emoji entities are kept in quotes.
   */
  entities: MessageEntity[];

  /**
   * Approximate quote position in the original message in UTF-16 code units as specified by the sender
   */
  position: number;

  /**
   * Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added
   * automatically by the server.
   */
  is_manual: boolean;
};
