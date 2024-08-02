/**
 * ## BusinessOpeningHoursInterval
 * Describes an interval of time during which a business is open.
 * @see https://core.telegram.org/bots/api#businessopeninghoursinterval
 */
export type BusinessOpeningHoursInterval = {
  opening_minute: number;
  closing_minute: number;
};
