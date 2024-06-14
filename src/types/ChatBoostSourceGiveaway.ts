import { User } from './';

export type ChatBoostSourceGiveaway = {
  source: 'giveaway';
  giveaway_message_id: number;
  user?: User;
  is_unclaimed?: boolean;
};
