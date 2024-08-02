import { MessageEntity } from './MessageEntity';

/**
 * ## PollOption
 * This object contains information about one answer option in a poll.
 * @see https://core.telegram.org/bots/api#polloption
 */
export type PollOption = {
  text: string;
  text_entities?: MessageEntity[];
  voter_count: number;
};
