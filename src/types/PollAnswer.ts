import { Chat, User } from './';

/**
 * ## PollAnswer
 * This object represents an answer of a user in a non-anonymous poll.
 * @see https://core.telegram.org/bots/api#pollanswer
 */
export type PollAnswer = {

  /**
   * Unique poll identifier
   */
  poll_id: string;

  /**
   * Optional. The chat that changed the answer to the poll, if the voter is anonymous
   */
  voter_chat: Chat;

  /**
   * Optional. The user that changed the answer to the poll, if the voter isn't anonymous
   */
  user: User;

  /**
   * 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
   */
  option_ids: number[];
};
