import { LabeledPrice } from './LabeledPrice';

export type ShippingOption = {
  id: string;
  title: string;
  prices: LabeledPrice[];
};
