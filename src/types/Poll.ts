import { MessageEntity, PollOption } from './';

/**
 * ## Poll
 * This object contains information about a poll.
 * @see https://core.telegram.org/bots/api#poll
 */
export type Poll = {
  id: string;
  question: string;
  question_entities?: MessageEntity[];
  options: PollOption[];
  total_voter_count: number;
  is_closed: boolean;
  is_anonymous: boolean;
  type: 'regular' | 'quiz';
  allows_multiple_answers: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
};
