/**
 * ## BotCommandScopeChat
 * Represents the scope of bot commands, covering a specific chat.
 * @see https://core.telegram.org/bots/api#botcommandscopechat
 */
export type BotCommandScopeChat = {
  type: 'chat';
  chat_id: number | string;
};
