import { LabeledPrice } from './LabeledPrice';

/**
 * ## ShippingOption
 * This object represents one shipping option.
 * @see https://core.telegram.org/bots/api#shippingoption
 */
export type ShippingOption = {
  /**
   * Shipping option identifier
   */
  id: string;

  /**
   * Option title
   */
  title: string;

  /**
   * List of price portions
   */
  prices: LabeledPrice[];
};
