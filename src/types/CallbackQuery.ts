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
  id: string;
  from: User;
  message?: MaybeInaccessibleMessage;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
};
