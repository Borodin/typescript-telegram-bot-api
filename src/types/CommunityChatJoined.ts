import { Community } from './';

/**
 * ## CommunityChatJoined
 * Describes a service message about a chat being joined by a user from a community.
 * @see https://core.telegram.org/bots/api#communitychatjoined
 */
export type CommunityChatJoined = {
  /**
   * The community from which the chat was joined
   */
  community: Community;
};
