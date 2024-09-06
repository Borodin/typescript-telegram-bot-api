import { User } from './User';

/**
 * ## MessageOriginUser
 * The message was originally sent by a known user.
 * @see https://core.telegram.org/bots/api#messageoriginuser
 */
export type MessageOriginUser = {

  /**
   * Type of the message origin, always “user”
   */
  type: 'user';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * User that sent the message originally
   */
  sender_user: User;
};
