/**
 * ## UserRating
 * This object describes the rating of a user based on their Telegram Star spendings.
 * @see https://core.telegram.org/bots/api#userrating
 */
export type UserRating = {
  /**
   * Current level of the user, indicating their reliability when purchasing digital goods and services.
   * A higher level suggests a more trustworthy customer; a negative level is likely reason for concern.
   */
  level: number;

  /**
   * Numerical value of the user's rating; the higher the rating, the better
   */
  rating: number;

  /**
   * The rating value required to get the current level
   */
  current_level_rating: number;

  /**
   * Optional. The rating value required to get to the next level; omitted if the maximum level was reached
   */
  next_level_rating?: number;
};
