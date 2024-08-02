/**
 * ## InputContactMessageContent
 * Represents the content of a contact message to be sent as the result of an inline query.
 * @see https://core.telegram.org/bots/api#inputcontactmessagecontent
 */
export type InputContactMessageContent = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
};
