/**
 * ## KeyboardButtonRequestChat
 * This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared
 * with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if
 * appropriate. [More about requesting chats](https://core.telegram.org/bots/features#chat-and-user-selection).
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestchat
 */
export type KeyboardButtonRequestChat = {
  /**
   * Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique
   * within the message
   */
  request_id: number;

  /**
   * Pass True to request a channel chat, pass False to request a group or a supergroup chat.
   */
  chat_is_channel: boolean;

  /**
   * Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no
   * additional restrictions are applied.
   */
  chat_is_forum?: boolean;

  /**
   * Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a
   * username. If not specified, no additional restrictions are applied.
   */
  chat_has_username?: boolean;

  /**
   * Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
   */
  chat_is_created?: boolean;

  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights
   * must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.
   */
  user_administrator_rights?: string; //TODO: JSON
  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights
   * must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.
   */
  bot_administrator_rights?: string; //TODO: JSON
  /**
   * Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
   */
  bot_is_member?: boolean;

  /**
   * Optional. Pass True to request the chat's title
   */
  request_title?: string;

  /**
   * Optional. Pass True to request the chat's username
   */
  request_username?: string;

  /**
   * Optional. Pass True to request the chat's photo
   */
  request_photo?: string;
};
