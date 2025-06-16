/**
 * ## StoryAreaPosition
 * Describes the position of a clickable area within a story.
 * @see https://core.telegram.org/bots/api#storyareaposition
 */
export type StoryAreaPosition = {
  /**
   * The abscissa of the area's center, as a percentage of the media width
   */
  x_percentage: number;

  /**
   * The ordinate of the area's center, as a percentage of the media height
   */
  y_percentage: number;

  /**
   * The width of the area's rectangle, as a percentage of the media width
   */
  width_percentage: number;

  /**
   * The height of the area's rectangle, as a percentage of the media height
   */
  height_percentage: number;

  /**
   * The clockwise rotation angle of the rectangle, in degrees; 0-360
   */
  rotation_angle: number;

  /**
   * The radius of the rectangle corner rounding, as a percentage of the media
   */
  corner_radius_percentage: number;
};
