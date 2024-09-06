import { User } from './';

/**
 * ## ChatMemberLeft
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 * @see https://core.telegram.org/bots/api#chatmemberleft
 */
export type ChatMemberLeft = {

  /**
   * The member's status in the chat, always “left”
   */
  status: 'left';

  /**
   * Information about the user
   */
  user: User;
};
