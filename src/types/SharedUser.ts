import { PhotoSize } from './PhotoSize';

/**
 * ## SharedUser
 * This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.
 * @see https://core.telegram.org/bots/api#shareduser
 */
export type SharedUser = {
  user_id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo?: PhotoSize[];
};
