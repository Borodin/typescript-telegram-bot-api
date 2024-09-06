import { MessageEntity } from './MessageEntity';

/**
 * ## PollOption
 * This object contains information about one answer option in a poll.
 * @see https://core.telegram.org/bots/api#polloption
 */
export type PollOption = {

  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in
   * poll option texts
   */
  text_entities?: MessageEntity[];

  /**
   * Number of users that voted for this option
   */
  voter_count: number;
};
