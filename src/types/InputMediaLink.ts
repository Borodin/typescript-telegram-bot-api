/**
 * ## InputMediaLink
 * Represents an HTTP link to be sent.
 * @see https://core.telegram.org/bots/api#inputmedialink
 */
export type InputMediaLink = {
  /**
   * Type of the media, must be link
   */
  type: 'link';

  /**
   * HTTP URL of the link
   */
  url: string;
};
