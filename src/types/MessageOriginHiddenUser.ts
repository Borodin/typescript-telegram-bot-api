/**
 * ## MessageOriginHiddenUser
 * The message was originally sent by an unknown user.
 * @see https://core.telegram.org/bots/api#messageoriginhiddenuser
 */
export type MessageOriginHiddenUser = {
  /**
   * Type of the message origin, always “hidden_user”
   */
  type: 'hidden_user';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Name of the user that sent the message originally
   */
  sender_user_name: string;
};
