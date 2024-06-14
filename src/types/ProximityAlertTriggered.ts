import { User } from './User';

export type ProximityAlertTriggered = {
  traveler: User;
  watcher: User;
  distance: number;
};
