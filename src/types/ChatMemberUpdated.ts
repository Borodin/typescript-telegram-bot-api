import { Chat, User, ChatMember, ChatInviteLink } from './';

/**
 * ## ChatMemberUpdated
 * This object represents changes in the status of a chat member.
 * @see https://core.telegram.org/bots/api#chatmemberupdated
 */
export type ChatMemberUpdated = {
  chat: Chat;
  from: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
  via_join_request?: boolean;
  via_chat_folder_invite_link?: boolean;
};
