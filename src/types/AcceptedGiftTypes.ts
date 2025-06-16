/**
 * ## AcceptedGiftTypes
 * This object describes the types of gifts that can be gifted to a user or a chat.
 * @see https://core.telegram.org/bots/api#acceptedgifttypes
 */
export type AcceptedGiftTypes = {
  /**
   * True, if unlimited regular gifts are accepted
   */
  unlimited_gifts: boolean;

  /**
   * True, if limited regular gifts are accepted
   */
  limited_gifts: boolean;

  /**
   * True, if unique gifts or gifts that can be upgraded to unique for free are accepted
   */
  unique_gifts: boolean;

  /**
   * True, if a Telegram Premium subscription is accepted
   */
  premium_subscription: boolean;
};
