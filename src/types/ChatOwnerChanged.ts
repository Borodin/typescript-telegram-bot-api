import { User } from './';

/**
 * ## ChatOwnerChanged
 * Describes a service message about an ownership change in the chat.
 * @see https://core.telegram.org/bots/api#chatownerchanged
 */
export type ChatOwnerChanged = {
  /**
   * The new owner of the chat
   */
  new_owner: User;
};
