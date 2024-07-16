import { User, OrderInfo, Currencies } from './';

export type PreCheckoutQuery = {
  id: string;
  from: User;
  currency: Currencies | 'XTR';
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
};
