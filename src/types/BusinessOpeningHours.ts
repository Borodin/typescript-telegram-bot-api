import { BusinessOpeningHoursInterval } from './';

/**
 * ## BusinessOpeningHours
 * Describes the opening hours of a business.
 * @see https://core.telegram.org/bots/api#businessopeninghours
 */
export type BusinessOpeningHours = {
  time_zone_name: string;
  opening_hours: BusinessOpeningHoursInterval[];
};
