import { BusinessOpeningHoursInterval } from './';

/**
 * ## BusinessOpeningHours
 * Describes the opening hours of a business.
 * @see https://core.telegram.org/bots/api#businessopeninghours
 */
export type BusinessOpeningHours = {
  /**
   * Unique name of the time zone for which the opening hours are defined
   */
  time_zone_name: string;

  /**
   * List of time intervals describing business opening hours
   */
  opening_hours: BusinessOpeningHoursInterval[];
};
