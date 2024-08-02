import { LabeledPrice } from './LabeledPrice';

/**
 * ## ShippingOption
 * This object represents one shipping option.
 * @see https://core.telegram.org/bots/api#shippingoption
 */
export type ShippingOption = {
  id: string;
  title: string;
  prices: LabeledPrice[];
};
