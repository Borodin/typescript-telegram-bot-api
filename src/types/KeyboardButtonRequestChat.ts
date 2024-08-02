/**
 * ## KeyboardButtonRequestChat
 * This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. [More about requesting chats](https://core.telegram.org/bots/features#chat-and-user-selection).
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestchat
 */
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
