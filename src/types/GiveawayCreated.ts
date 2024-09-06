/**
 * ## GiveawayCreated
 * This object represents a service message about the creation of a scheduled giveaway.
 * @see https://core.telegram.org/bots/api#giveawaycreated
 */
export type GiveawayCreated = {
  /**
   * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number;
};
