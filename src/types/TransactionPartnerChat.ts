import { Chat, Gift } from './';

/**
 * Describes a transaction with a chat.
 */
export type TransactionPartnerChat = {
  /**
   * Type of the transaction partner, always “chat”
   */
  type: 'chat';

  /**
   * Information about the chat
   */
  chat: Chat;

  /**
   * Optional. The gift sent to the chat by the bot
   */
  gift?: Gift;
};
