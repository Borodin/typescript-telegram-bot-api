import { BusinessOpeningHoursInterval } from './';

export type BusinessOpeningHours = {
  time_zone_name: string;
  opening_hours: BusinessOpeningHoursInterval[];
};
