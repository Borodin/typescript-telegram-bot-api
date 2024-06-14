import {
  BackgroundFillSolid,
  BackgroundFillGradient,
  BackgroundFillFreeformGradient,
} from './';

/**
 * ## BackgroundFill
 * This object describes the way a background is filled based on the selected colors. Currently, it can be one of
 * - `BackgroundFillSolid`
 * - `BackgroundFillGradient`
 * - `BackgroundFillFreeformGradient`
 * @see https://core.telegram.org/bots/api#backgroundfill
 */
export type BackgroundFill =
  | BackgroundFillSolid
  | BackgroundFillGradient
  | BackgroundFillFreeformGradient;
