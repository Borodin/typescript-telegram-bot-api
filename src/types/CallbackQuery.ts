import { MaybeInaccessibleMessage, User } from './';

/**
 * ## answerCallbackQuery
 * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the
 * user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * > Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create
 * a game for your bot via @BotFather and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX`
 * that open your bot with a parameter.
 * @see https://core.telegram.org/bots/api#callbackquery
 */
export type CallbackQuery = {

  /**
   * Unique identifier for this query
   */
  id: string;

  /**
   * Sender
   */
  from: User;

  /**
   * Optional. Message sent by the bot with the callback button that originated the query
   */
  message?: MaybeInaccessibleMessage;

  /**
   * Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string;

  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.
   * Useful for high scores in games.
   */
  chat_instance: string;

  /**
   * Optional. Data associated with the callback button. Be aware that the message originated the query can contain no
   * callback buttons with this data.
   */
  data?: string;

  /**
   * Optional. Short name of a Game to be returned, serves as the unique identifier for the game
   */
  game_short_name?: string;
};
