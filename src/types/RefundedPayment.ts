import { Currencies } from './index';

/**
 * ## RefundedPayment
 * This object contains basic information about a refunded payment.
 * @see https://core.telegram.org/bots/api#refundedpayment
 */
export type RefundedPayment = {
  currency: Currencies | 'XTR';
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
};
