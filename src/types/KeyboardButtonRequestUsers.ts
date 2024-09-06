/**
 * ## KeyboardButtonRequestUsers
 * This object defines the criteria used to request suitable users. Information about the selected users will be shared
 * with the bot when the corresponding button is pressed. [More about requesting users](https://core.telegram.org/bots/features#chat-and-user-selection)
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestusers
 */
export type KeyboardButtonRequestUsers = {

  /**
   * Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within
   * the message
   */
  request_id: number;

  /**
   * Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional
   * restrictions are applied.
   */
  user_is_bot?: boolean;

  /**
   * Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no
   * additional restrictions are applied.
   */
  user_is_premium?: boolean;

  /**
   * Optional. The maximum number of users to be selected; 1-10. Defaults to 1.
   */
  max_quantity?: number;

  /**
   * Optional. Pass True to request the users' first and last names
   */
  request_name?: string;

  /**
   * Optional. Pass True to request the users' usernames
   */
  request_username?: string;

  /**
   * Optional. Pass True to request the users' photos
   */
  request_photo?: string;
};
