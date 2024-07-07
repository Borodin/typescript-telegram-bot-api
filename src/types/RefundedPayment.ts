export type RefundedPayment = {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
};
