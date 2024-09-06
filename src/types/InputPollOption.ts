import { ParseMode } from './';

/**
 * ## InputPollOption
 * This object contains information about one answer option in a poll to be sent.
 * @see https://core.telegram.org/bots/api#inputpolloption
 */
export type InputPollOption = {

  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom
   * emoji entities are allowed
   */
  text_parse_mode?: ParseMode;

  /**
   * Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified
   * instead of text_parse_mode
   */
  text_entities?: 'string'; // TODO: JSON MessageEntity[];
};
