import { Chat } from './';

/**
 * ## BusinessMessagesDeleted
 * This object is received when messages are deleted from a connected business account.
 * @see https://core.telegram.org/bots/api#businessmessagesdeleted
 */
export type BusinessMessagesDeleted = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Information about a chat in the business account. The bot may not have access to the chat or the corresponding
   * user.
   */
  chat: Chat;

  /**
   * The list of identifiers of deleted messages in the chat of the business account
   */
  message_ids: number[];
};
