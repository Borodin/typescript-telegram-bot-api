import { Chat, User } from './';

/**
 * ## PollAnswer
 * This object represents an answer of a user in a non-anonymous poll.
 * @see https://core.telegram.org/bots/api#pollanswer
 */
export type PollAnswer = {
  poll_id: string;
  voter_chat: Chat;
  user: User;
  option_ids: number[];
};
