/**
 * ## BotCommandScopeChatMember
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 * @see https://core.telegram.org/bots/api#botcommandscopechatmember
 */
export type BotCommandScopeChatMember = {
  type: 'chat_member';
  chat_id: number | string;
  user_id: number;
};
