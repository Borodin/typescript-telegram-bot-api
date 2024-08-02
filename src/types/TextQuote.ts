import { MessageEntity } from './';

/**
 * ## TextQuote
 * This object contains information about the quoted part of a message that is replied to by the given message.
 * @see https://core.telegram.org/bots/api#textquote
 */
export type TextQuote = {
  text: string;
  entities: MessageEntity[];
  position: number;
  is_manual: boolean;
};
