import { RichText } from './';

/**
 * ## RichTextDateTime
 * Formatted date and time.
 * @see https://core.telegram.org/bots/api#richtextdatetime
 */
export type RichTextDateTime = {
  /**
   * Type of the rich text, always "date_time"
   */
  type: 'date_time';

  /**
   * The text
   */
  text: RichText;

  /**
   * The Unix time associated with the entity
   */
  unix_time: number;

  /**
   * The string that defines the formatting of the date and time. See date-time entity formatting for more details.
   */
  date_time_format: string;
};
