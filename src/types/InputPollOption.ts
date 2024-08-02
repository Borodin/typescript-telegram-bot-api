import { ParseMode } from './';

/**
 * ## InputPollOption
 * This object contains information about one answer option in a poll to be sent.
 * @see https://core.telegram.org/bots/api#inputpolloption
 */
export type InputPollOption = {
  text: string;
  text_parse_mode?: ParseMode;
  text_entities?: 'string'; // TODO: JSON MessageEntity[];
};
