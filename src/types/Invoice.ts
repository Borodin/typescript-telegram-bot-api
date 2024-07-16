import { Currencies } from './index';

export type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: Currencies | 'XTR';
  total_amount: number;
};
