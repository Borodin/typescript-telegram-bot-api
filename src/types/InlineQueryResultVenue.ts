import { InlineKeyboardMarkup, InputMessageContent } from './';

/**
 * ## InlineQueryResultVenue
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content
 * to send a message with the specified content instead of the venue.
 * @see https://core.telegram.org/bots/api#inlinequeryresultvenue
 */
export type InlineQueryResultVenue = {

  /**
   * Type of the result, must be venue
   */
  type: 'venue';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Latitude of the venue location in degrees
   */
  latitude: number;

  /**
   * Longitude of the venue location in degrees
   */
  longitude: number;

  /**
   * Title of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Optional. Foursquare identifier of the venue if known
   */
  foursquare_id?: string;

  /**
   * Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”,
   * “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquare_type?: string;

  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the venue
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
