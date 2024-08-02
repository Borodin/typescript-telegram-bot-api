import { User } from './User';

/**
 * ## MessageOriginUser
 * The message was originally sent by a known user.
 * @see https://core.telegram.org/bots/api#messageoriginuser
 */
export type MessageOriginUser = {
  type: 'user';
  date: number;
  sender_user: User;
};
