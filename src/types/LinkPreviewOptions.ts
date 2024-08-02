/**
 * ## LinkPreviewOptions
 * Describes the options used for link preview generation.
 * @see https://core.telegram.org/bots/api#linkpreviewoptions
 */
export type LinkPreviewOptions = {
  is_disabled?: boolean;
  url?: string;
  prefer_small_media?: boolean;
  prefer_large_media?: boolean;
  show_above_text?: boolean;
};
