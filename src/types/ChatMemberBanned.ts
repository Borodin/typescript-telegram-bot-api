import { User } from './';

/**
 * ## ChatMemberBanned
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 * @see https://core.telegram.org/bots/api#chatmemberbanned
 */
export type ChatMemberBanned = {
  status: 'kicked';
  user: User;
  until_date: number;
};
