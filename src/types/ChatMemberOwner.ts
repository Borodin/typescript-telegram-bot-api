import { User } from './';

/**
 * ## ChatMemberOwner
 * Represents a chat member that owns the chat and has all administrator privileges.
 * @see https://core.telegram.org/bots/api#chatmemberowner
 */
export type ChatMemberOwner = {

  /**
   * The member's status in the chat, always “creator”
   */
  status: 'creator';

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;

  /**
   * Optional. Custom title for this user
   */
  custom_title?: string;
};
