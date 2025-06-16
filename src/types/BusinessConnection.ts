import { User, BusinessBotRights } from './';

/**
 * ## BusinessConnection
 * Describes the connection of the bot with a business account.
 * @see https://core.telegram.org/bots/api#businessconnection
 */
export type BusinessConnection = {
  /**
   * Unique identifier of the business connection
   */
  id: string;

  /**
   * Business account user that created the business connection
   */
  user: User;

  /**
   * Identifier of a private chat with the user who created the business connection. This number may have more than 32
   * significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has
   * at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this
   * identifier.
   */
  user_chat_id: number;

  /**
   * Date the connection was established in Unix time
   */
  date: number;

  /**
   * Optional. Rights of the business bot
   */
  rights?: BusinessBotRights;

  /**
   * True, if the connection is active
   */
  is_enabled: boolean;
};
