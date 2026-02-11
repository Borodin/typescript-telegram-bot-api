import { User } from './';

/**
 * ## ChatOwnerLeft
 * Describes a service message about the chat owner leaving the chat.
 * @see https://core.telegram.org/bots/api#chatownerleft
 */
export type ChatOwnerLeft = {
  /**
   * Optional. The user which will be the new owner of the chat if the previous owner does not return to the chat
   */
  new_owner?: User;
};
