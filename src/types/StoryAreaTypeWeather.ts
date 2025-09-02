/**
 * ## StoryAreaTypeWeather
 * Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.
 * @see https://core.telegram.org/bots/api#storyareatypeweather
 */
export type StoryAreaTypeWeather = {
  /**
   * Type of the area, always “weather”
   */
  type: 'weather';

  /**
   * Temperature, in degree Celsius
   */
  temperature: number;

  /**
   * Emoji representing the weather
   */
  emoji: string;

  /**
   * A color of the area background in the ARGB format
   */
  background_color: number;
};
