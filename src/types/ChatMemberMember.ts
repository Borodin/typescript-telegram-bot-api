import { User } from './';

/**
 * ## ChatMemberMember
 * Represents a chat member that has no additional privileges or restrictions.
 * @see https://core.telegram.org/bots/api#chatmembermember
 */
export type ChatMemberMember = {
  /**
   * The member's status in the chat, always “member”
   */
  status: 'member';

  /**
   * Information about the user
   */
  user: User;

  /**
   * Optional. Date when the user's subscription will expire; Unix time
   */
  until_date?: number;
};
