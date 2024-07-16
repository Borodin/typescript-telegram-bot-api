import { Currencies } from './index';

export type RefundedPayment = {
  currency: Currencies | 'XTR';
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
};
