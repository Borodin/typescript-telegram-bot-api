/**
 * ## Location
 * his object represents a point on the map.
 * @see https://core.telegram.org/bots/api#location
 */
export type Location = {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
};
