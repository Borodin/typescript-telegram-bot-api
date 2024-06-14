export type KeyboardButtonRequestChat = {
  request_id: number;
  chat_is_channel: boolean;
  chat_is_forum?: boolean;
  chat_has_username?: boolean;
  chat_is_created?: boolean;
  user_administrator_rights?: string; //TODO: JSON
  bot_administrator_rights?: string; //TODO: JSON
  bot_is_member?: boolean;
  request_title?: string;
  request_username?: string;
  request_photo?: string;
};
