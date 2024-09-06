import { Sticker } from './';

/**
 * ## BusinessIntro
 * Contains information about the start page settings of a Telegram Business account.
 * @see https://core.telegram.org/bots/api#businessintro
 */
export type BusinessIntro = {
  /**
   * Optional. Title text of the business intro
   */
  title?: string;

  /**
   * Optional. Message text of the business intro
   */
  message?: string;

  /**
   * Optional. Sticker of the business intro
   */
  sticker?: Sticker;
};
