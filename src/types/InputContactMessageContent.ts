/**
 * ## InputContactMessageContent
 * Represents the content of a contact message to be sent as the result of an inline query.
 * @see https://core.telegram.org/bots/api#inputcontactmessagecontent
 */
export type InputContactMessageContent = {

  /**
   * Contact's phone number
   */
  phone_number: string;

  /**
   * Contact's first name
   */
  first_name: string;

  /**
   * Optional. Contact's last name
   */
  last_name?: string;

  /**
   * Optional. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard),
   * 0-2048 bytes
   */
  vcard?: string;
};
