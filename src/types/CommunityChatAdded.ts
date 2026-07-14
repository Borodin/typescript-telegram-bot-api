import { Community } from './';

/**
 * ## CommunityChatAdded
 * Describes a service message about a chat being added to a community.
 * @see https://core.telegram.org/bots/api#communitychatadded
 */
export type CommunityChatAdded = {
  /**
   * The new community to which the chat belongs
   */
  community: Community;
};
