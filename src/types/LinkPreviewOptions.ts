/**
 * ## LinkPreviewOptions
 * Describes the options used for link preview generation.
 * @see https://core.telegram.org/bots/api#linkpreviewoptions
 */
export type LinkPreviewOptions = {

  /**
   * Optional. True, if the link preview is disabled
   */
  is_disabled?: boolean;

  /**
   * Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used
   */
  url?: string;
  /**
   * Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly
   * specified or media size change isn't supported for the preview
   */
  prefer_small_media?: boolean;
  /**
   * Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly
   * specified or media size change isn't supported for the preview
   */
  prefer_large_media?: boolean;

  /**
   * Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown
   * below the message text
   */
  show_above_text?: boolean;
};
