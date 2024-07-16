import { Currencies, OrderInfo } from './';

export type SuccessfulPayment = {
  currency: Currencies | 'XTR';
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
};
