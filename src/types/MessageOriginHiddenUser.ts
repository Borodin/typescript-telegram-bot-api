/**
 * ## MessageOriginHiddenUser
 * The message was originally sent by an unknown user.
 * @see https://core.telegram.org/bots/api#messageoriginhiddenuser
 */
export type MessageOriginHiddenUser = {
  type: 'hidden_user';
  date: number;
  sender_user_name: string;
};
