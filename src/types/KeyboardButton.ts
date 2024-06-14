import {
  WebAppInfo,
  KeyboardButtonRequestChat,
  KeyboardButtonPollType,
  KeyboardButtonRequestUsers,
} from './';

export type KeyboardButton = {
  text: string;
  request_users?: KeyboardButtonRequestUsers;
  request_chat?: KeyboardButtonRequestChat;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
};
