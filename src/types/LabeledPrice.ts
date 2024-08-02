/**
 * ## LabeledPrice
 * This object represents a portion of the price for goods or services.
 * @see https://core.telegram.org/bots/api#labeledprice
 */
export type LabeledPrice = {
  label: string;
  amount: number;
};
