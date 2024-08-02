import { User } from './User';

/**
 * ## ProximityAlertTriggered
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert
 * set by another user.
 * @see https://core.telegram.org/bots/api#proximityalerttriggered
 */
export type ProximityAlertTriggered = {
  traveler: User;
  watcher: User;
  distance: number;
};
