/**
 * ## KeyboardButtonRequestUsers
 * This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. [More about requesting users](https://core.telegram.org/bots/features#chat-and-user-selection)
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestusers
 */
export type KeyboardButtonRequestUsers = {
  request_id: number;
  user_is_bot?: boolean;
  user_is_premium?: boolean;
  max_quantity?: number;
  request_name?: string;
  request_username?: string;
  request_photo?: string;
};
