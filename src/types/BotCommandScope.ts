import {
  BotCommandScopeChatMember,
  BotCommandScopeChatAdministrators,
  BotCommandScopeChat,
  BotCommandScopeAllChatAdministrators,
  BotCommandScopeAllGroupChats,
  BotCommandScopeAllPrivateChats,
  BotCommandScopeDefault,
} from './';

/**
 * ## BotCommandScope
 * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
 * - `BotCommandScopeDefault`
 * - `BotCommandScopeAllPrivateChats`
 * - `BotCommandScopeAllGroupChats`
 * - `BotCommandScopeAllChatAdministrators`
 * - `BotCommandScopeChat`
 * - `BotCommandScopeChatAdministrators`
 * - `BotCommandScopeChatMember`
 * @see https://core.telegram.org/bots/api#botcommandscope
 */
export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;
