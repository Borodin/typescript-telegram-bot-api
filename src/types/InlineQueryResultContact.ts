import { InlineKeyboardMarkup, InputMessageContent } from './';

/**
 * ## InlineQueryResultContact
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can
 * use input_message_content to send a message with the specified content instead of the contact.
 * @see https://core.telegram.org/bots/api#inlinequeryresultcontact
 */
export type InlineQueryResultContact = {

  /**
   * Type of the result, must be contact
   */
  type: 'contact';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

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
   * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the contact
   */
  input_message_content?: InputMessageContent;

  /**
   * Optional. Url of the thumbnail for the result
   */
  thumbnail_url?: string;

  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number;
};
