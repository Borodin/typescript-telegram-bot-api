import { MessageEntity, PollOption } from './';

/**
 * ## Poll
 * This object contains information about a poll.
 * @see https://core.telegram.org/bots/api#poll
 */
export type Poll = {
  /**
   * Unique poll identifier
   */
  id: string;

  /**
   * Poll question, 1-300 characters
   */
  question: string;

  /**
   * Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll
   * questions
   */
  question_entities?: MessageEntity[];

  /**
   * List of poll options
   */
  options: PollOption[];

  /**
   * Total number of users that voted in the poll
   */
  total_voter_count: number;

  /**
   * True, if the poll is closed
   */
  is_closed: boolean;

  /**
   * True, if the poll is anonymous
   */
  is_anonymous: boolean;

  /**
   * Poll type, currently can be “regular” or “quiz”
   */
  type: 'regular' | 'quiz';

  /**
   * True, if the poll allows multiple answers
   */
  allows_multiple_answers: boolean;

  /**
   * True, if the poll allows to change the chosen answer options
   */
  allows_revoting: boolean;

  /**
   * Optional. Array of 0-based identifiers of the correct answer options. Available only for polls in quiz mode which
   * are closed or were sent (not forwarded) by the bot or to the private chat with the bot.
   */
  correct_option_ids?: number[];

  /**
   * Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll,
   * 0-200 characters
   */
  explanation?: string;

  /**
   * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
   */
  explanation_entities?: MessageEntity[];

  /**
   * Optional. Amount of time in seconds the poll will be active after creation
   */
  open_period?: number;

  /**
   * Optional. Point in time (Unix timestamp) when the poll will be automatically closed
   */
  close_date?: number;

  /**
   * Optional. Description of the poll; for polls inside the Message object only
   */
  description?: string;

  /**
   * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the description
   */
  description_entities?: MessageEntity[];
};
