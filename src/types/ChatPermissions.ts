/**
 * ## ChatPermissions
 * Describes actions that a non-administrator user is allowed to take in a chat.
 * @see https://core.telegram.org/bots/api#chatpermissions
 */
export type ChatPermissions = {

  /**
   * Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices,
   * locations and venues
   */
  can_send_messages?: boolean;

  /**
   * Optional. True, if the user is allowed to send audios
   */
  can_send_audios?: boolean;

  /**
   * Optional. True, if the user is allowed to send documents
   */
  can_send_documents?: boolean;

  /**
   * Optional. True, if the user is allowed to send photos
   */
  can_send_photos?: boolean;

  /**
   * Optional. True, if the user is allowed to send videos
   */
  can_send_videos?: boolean;

  /**
   * Optional. True, if the user is allowed to send video notes
   */
  can_send_video_notes?: boolean;

  /**
   * Optional. True, if the user is allowed to send voice notes
   */
  can_send_voice_notes?: boolean;

  /**
   * Optional. True, if the user is allowed to send polls
   */
  can_send_polls?: boolean;

  /**
   * Optional. True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages?: boolean;

  /**
   * Optional. True, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews?: boolean;

  /**
   * Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public
   * supergroups
   */
  can_change_info?: boolean;

  /**
   * Optional. True, if the user is allowed to invite new users to the chat
   */
  can_invite_users?: boolean;

  /**
   * Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
   */
  can_pin_messages?: boolean;

  /**
   * Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
   */
  can_manage_topics?: boolean;
};
