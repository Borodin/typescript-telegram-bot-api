import { User } from './';

/**
 * ## ChatMemberRestricted
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 * @see https://core.telegram.org/bots/api#chatmemberrestricted
 */
export type ChatMemberRestricted = {
  /**
   * The member's status in the chat, always “restricted”
   */
  status: 'restricted';

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the user is a member of the chat at the moment of the request
   */
  is_member: boolean;

  /**
   * True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and
   * venues
   */
  can_send_messages: boolean;

  /**
   * True, if the user is allowed to send audios
   */
  can_send_audios: boolean;

  /**
   * True, if the user is allowed to send documents
   */
  can_send_documents: boolean;

  /**
   * True, if the user is allowed to send photos
   */
  can_send_photos: boolean;

  /**
   * True, if the user is allowed to send videos
   */
  can_send_videos: boolean;

  /**
   * True, if the user is allowed to send video notes
   */
  can_send_video_notes: boolean;

  /**
   * True, if the user is allowed to send voice notes
   */
  can_send_voice_notes: boolean;

  /**
   * True, if the user is allowed to send polls
   */
  can_send_polls: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;

  /**
   * True, if the user is allowed to pin messages
   */
  can_pin_messages: boolean;

  /**
   * True, if the user is allowed to create forum topics
   */
  can_manage_topics: boolean;

  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
   */
  until_date: number;
};
