import { WebAppInfo } from './';

/**
 * ## InlineQueryResultsButton
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional
 * fields.
 * @see https://core.telegram.org/bots/api#inlinequeryresultsbutton
 */
export type InlineQueryResultsButton = {
  text: string;
  web_app: WebAppInfo;
  start_parameter: string;
};
