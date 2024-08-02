import { User } from './';

/**
 * ## ChatMemberOwner
 * Represents a chat member that owns the chat and has all administrator privileges.
 * @see https://core.telegram.org/bots/api#chatmemberowner
 */
export type ChatMemberOwner = {
  status: 'creator';
  user: User;
  is_anonymous: boolean;
  custom_title?: string;
};
