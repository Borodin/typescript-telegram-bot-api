import { Sticker } from './';

/**
 * ## BusinessIntro
 * Contains information about the start page settings of a Telegram Business account.
 * @see https://core.telegram.org/bots/api#businessintro
 */
export type BusinessIntro = {
  title?: string;
  message?: string;
  sticker?: Sticker;
};
