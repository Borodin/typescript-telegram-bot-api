/**
 * ## ChatAdministratorRights
 * Represents the rights of an administrator in a chat.
 * @see https://core.telegram.org/bots/api#chatadministratorrights
 */
export type ChatAdministratorRights = {
  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;
  /**
   * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel
   * members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
   */
  can_manage_chat: boolean;

  /**
   * True, if the administrator can delete messages of other users
   */
  can_delete_messages: boolean;

  /**
   * True, if the administrator can manage video chats
   */
  can_manage_video_chats: boolean;

  /**
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members: boolean;

  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote
   * administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by
   * the user)
   */
  can_promote_members: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;

  /**
   * True, if the administrator can post stories to the chat
   */
  can_post_stories: boolean;

  /**
   * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat
   * stories, and access the chat's story archive
   */
  can_edit_stories: boolean;

  /**
   * True, if the administrator can delete stories posted by other users
   */
  can_delete_stories: boolean;

  /**
   * True, if the administrator can post messages in the channel, or access channel statistics; for channels only
   */
  can_post_messages?: boolean;

  /**
   * Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean;

  /**
   * Optional. True, if the user is allowed to pin messages; for groups and supergroups only
   */
  can_pin_messages?: boolean;

  /**
   * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean;
};
