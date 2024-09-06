import { InlineKeyboardMarkup, InputMessageContent } from './';

/**
 * ## InlineQueryResultLocation
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use
 * input_message_content to send a message with the specified content instead of the location.
 * @see https://core.telegram.org/bots/api#inlinequeryresultlocation
 */
export type InlineQueryResultLocation = {
  /**
   * Type of the result, must be location
   */
  type: 'location';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Location latitude in degrees
   */
  latitude: number;

  /**
   * Location longitude in degrees
   */
  longitude: number;

  /**
   * Location title
   */
  title: string;

  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;

  /**
   * Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF
   * for live locations that can be edited indefinitely.
   */
  live_period?: number;

  /**
   * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if
   * specified.
   */
  heading?: number;

  /**
   * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in
   * meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;

  /**
   * ptional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the location
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
