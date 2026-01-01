/**
 * ## UniqueGiftColors
 * This object contains information about the color scheme for a user's name,
 * message replies and link previews based on a unique gift.
 * @see https://core.telegram.org/bots/api#uniquegiftcolors
 */
export type UniqueGiftColors = {
  /**
   * Custom emoji identifier of the unique gift's model
   */
  model_custom_emoji_id: string;

  /**
   * Custom emoji identifier of the unique gift's symbol
   */
  symbol_custom_emoji_id: string;

  /**
   * Main color used in light themes; RGB format
   */
  light_theme_main_color: number;

  /**
   * List of 1-3 additional colors used in light themes; RGB format
   */
  light_theme_other_colors: number[];

  /**
   * Main color used in dark themes; RGB format
   */
  dark_theme_main_color: number;

  /**
   * List of 1-3 additional colors used in dark themes; RGB format
   */
  dark_theme_other_colors: number[];
};
