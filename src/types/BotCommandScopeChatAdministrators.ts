/**
 * ## BotCommandScopeChatAdministrators
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 * @see https://core.telegram.org/bots/api#botcommandscopechatadministrators
 */
export type BotCommandScopeChatAdministrators = {
  type: 'chat_administrators';
  chat_id: number | string;
};
