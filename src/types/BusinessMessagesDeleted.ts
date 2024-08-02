import { Chat } from './';

/**
 * ## BusinessMessagesDeleted
 * This object is received when messages are deleted from a connected business account.
 * @see https://core.telegram.org/bots/api#businessmessagesdeleted
 */
export type BusinessMessagesDeleted = {
  business_connection_id: string;
  chat: Chat;
  message_ids: number[];
};
