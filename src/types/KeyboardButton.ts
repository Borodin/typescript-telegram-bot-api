import { WebAppInfo, KeyboardButtonRequestChat, KeyboardButtonPollType, KeyboardButtonRequestUsers } from './';

/**
 * ## KeyboardButton
 * This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify
 * type of the button. For simple text buttons, String can be used instead of this object to specify the button text.
 * @see https://core.telegram.org/bots/api#keyboardbutton
 */
export type KeyboardButton = {
  text: string;
  request_users?: KeyboardButtonRequestUsers;
  request_chat?: KeyboardButtonRequestChat;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
};
