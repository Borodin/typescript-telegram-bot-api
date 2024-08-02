import { User, OrderInfo, Currencies } from './';

/**
 * ## PreCheckoutQuery
 * This object contains information about an incoming pre-checkout query.
 * @see https://core.telegram.org/bots/api#precheckoutquery
 */
export type PreCheckoutQuery = {
  id: string;
  from: User;
  currency: Currencies | 'XTR';
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
};
