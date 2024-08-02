import { Location, User } from './';

/**
 * ## InlineQuery
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some
 * default or trending results.
 * @see https://core.telegram.org/bots/api#inlinequery
 */
export type InlineQuery = {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
  location?: Location;
};
