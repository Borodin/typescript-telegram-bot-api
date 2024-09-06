/**
 * ## BotCommandScopeChatMember
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 * @see https://core.telegram.org/bots/api#botcommandscopechatmember
 */
export type BotCommandScopeChatMember = {
  /**
   * Scope type, must be chat_member
   */
  type: 'chat_member';

  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
