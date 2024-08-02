import { User } from './';

/**
 * ## ChosenInlineResult
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 * @see https://core.telegram.org/bots/api#choseninlineresult
 */
export type ChosenInlineResult = {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
};
