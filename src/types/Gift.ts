import { Chat, GiftBackground, Sticker } from './';

/**
 * ## Gift
 * This object represents a gift that can be sent by the bot.
 * @see https://core.telegram.org/bots/api#gift
 */
export type Gift = {
  /**
   * Unique identifier of the gift
   */
  id: string;

  /**
   * The sticker that represents the gift
   */
  sticker: Sticker;

  /**
   * The number of Telegram Stars that must be paid to send the sticker
   */
  star_count: number;

  /**
   * Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one
   */
  upgrade_star_count?: number;

  /**
   * Optional. True, if the gift can only be purchased by Telegram Premium subscribers
   */
  is_premium?: true;

  /**
   * Optional. True, if the gift can be used (after being upgraded) to customize a user's appearance
   */
  has_colors?: true;

  /**
   * Optional. The total number of the gifts of this type that can be sent; for limited gifts only
   */
  total_count?: number;

  /**
   * Optional. The number of remaining gifts of this type that can be sent; for limited gifts only
   */
  remaining_count?: number;

  /**
   * Optional. The total number of gifts of this type that can be sent by the bot; for limited gifts only
   */
  personal_total_count?: number;

  /**
   * Optional. The number of remaining gifts of this type that can be sent by the bot; for limited gifts only
   */
  personal_remaining_count?: number;

  /**
   * Optional. Background of the gift
   */
  background?: GiftBackground;

  /**
   * Optional. The total number of different unique gifts that can be obtained by upgrading the gift
   */
  unique_gift_variant_count?: number;

  /**
   * Optional. Information about the chat that published the gift
   */
  publisher_chat?: Chat;
};
