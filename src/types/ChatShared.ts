import { PhotoSize } from './';

/**
 * ## ChatShared
 * This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.
 * @see https://core.telegram.org/bots/api#chatshared
 */
export type ChatShared = {
  request_id: number;
  chat_id: number;
  title?: string;
  username?: string;
  photo?: PhotoSize[];
};
