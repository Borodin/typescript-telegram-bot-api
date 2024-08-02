import { SharedUser } from './';

/**
 * ## UsersShared
 * This object contains information about the users whose identifiers were shared with the bot using a
 * KeyboardButtonRequestUsers button.
 * @see https://core.telegram.org/bots/api#usersshared
 */
export type UsersShared = {
  request_id: number;
  users: SharedUser[];
};
