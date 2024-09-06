/**
 * ## Birthdate
 * Describes the birthdate of a user.
 * @see https://core.telegram.org/bots/api#birthdate
 */
export type Birthdate = {

  /**
   * Day of the user's birth; 1-31
   */
  day: number;

  /**
   * Month of the user's birth; 1-12
   */
  month: number;

  /**
   * Optional. Year of the user's birth
   */
  year?: number;
};
