import {
  ChatMemberOwner,
  ChatMemberAdministrator,
  ChatMemberMember,
  ChatMemberRestricted,
  ChatMemberLeft,
  ChatMemberBanned,
} from './';

export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;
