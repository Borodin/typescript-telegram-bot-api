import { LabeledPrice } from './';

export type InputInvoiceMessageContent = {
  title: string;
  description: string;
  payload: string;
  provider_token: string;
  currency: string;
  prices: LabeledPrice[]; //TODO: JSON
  max_tip_amount?: number;
  suggested_tip_amounts?: number[]; //TODO: JSON
  provider_data?: string; //TODO: JSON
  photo_url?: string;
  photo_size?: number;
  photo_width?: number;
  photo_height?: number;
  need_name?: boolean;
  need_phone_number?: boolean;
  need_email?: boolean;
  need_shipping_address?: boolean;
  send_phone_number_to_provider?: boolean;
  send_email_to_provider?: boolean;
  is_flexible?: boolean;
};
