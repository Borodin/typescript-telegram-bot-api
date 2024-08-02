import { Currencies } from './index';

/**
 * ## Invoice
 * This object contains basic information about an invoice.
 * @see https://core.telegram.org/bots/api#invoice
 */
export type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: Currencies | 'XTR';
  total_amount: number;
};
