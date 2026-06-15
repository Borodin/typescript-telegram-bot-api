import {
  InputInvoiceMessageContent,
  InputContactMessageContent,
  InputVenueMessageContent,
  InputLocationMessageContent,
  InputRichMessageContent,
  InputTextMessageContent,
} from './';

/**
 * ## InputMessageContent
 * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently
 * support the following types:
 * - InputTextMessageContent
 * - InputLocationMessageContent
 * - InputVenueMessageContent
 * - InputContactMessageContent
 * - InputInvoiceMessageContent
 * - InputRichMessageContent
 * @see https://core.telegram.org/bots/api#inputmessagecontent
 */
export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent
  | InputRichMessageContent;
