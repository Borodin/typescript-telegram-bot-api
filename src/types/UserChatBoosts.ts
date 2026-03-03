import { ChatBoost } from './';

/**
 * ## UserChatBoosts
 * This object represents a list of boosts added to a chat by a user.
 * @see https://core.telegram.org/bots/api#userchatboosts
 */
export type UserChatBoosts = {
  /**
   * The list of boosts added to the chat by the user
   */
  boosts: ChatBoost[];
};
