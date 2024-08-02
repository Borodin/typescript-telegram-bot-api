import { User } from './';

/**
 * ## ChatMemberAdministrator
 * Represents a chat member that has some additional privileges.
 * @see https://core.telegram.org/bots/api#chatmemberadministrator
 */
export type ChatMemberAdministrator = {
  status: 'administrator';
  user: User;
  can_be_edited: boolean;
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_video_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_stories: boolean;
  can_edit_stories: boolean;
  can_delete_stories: boolean;
  can_post_messages: boolean;
  can_edit_messages: boolean;
  can_pin_messages: boolean;
  can_manage_topics: boolean;
  custom_title?: string;
};
