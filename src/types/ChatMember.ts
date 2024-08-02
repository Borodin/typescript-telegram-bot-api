import {
  ChatMemberOwner,
  ChatMemberAdministrator,
  ChatMemberMember,
  ChatMemberRestricted,
  ChatMemberLeft,
  ChatMemberBanned,
} from './';

/**
 * ## ChatMember
 * This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 * - ChatMemberOwner
 * - ChatMemberAdministrator
 * - ChatMemberMember
 * - ChatMemberRestricted
 * - ChatMemberLeft
 * - ChatMemberBanned
 * @see https://core.telegram.org/bots/api#chatmember
 */
export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;
