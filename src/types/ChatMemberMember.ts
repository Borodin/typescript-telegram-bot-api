import { User } from './';

/**
 * ## ChatMemberMember
 * Represents a chat member that has no additional privileges or restrictions.
 * @see https://core.telegram.org/bots/api#chatmembermember
 */
export type ChatMemberMember = {
  status: 'member';
  user: User;
};
