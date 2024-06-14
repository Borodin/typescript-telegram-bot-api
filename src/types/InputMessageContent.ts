import {
  InputInvoiceMessageContent,
  InputContactMessageContent,
  InputVenueMessageContent,
  InputLocationMessageContent,
  InputTextMessageContent,
} from './';

export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent;
