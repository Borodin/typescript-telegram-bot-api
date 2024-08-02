import { User } from './';

/**
 * ## ChatMemberLeft
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 * @see https://core.telegram.org/bots/api#chatmemberleft
 */
export type ChatMemberLeft = {
  status: 'left';
  user: User;
};
