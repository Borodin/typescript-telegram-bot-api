import { Message } from './';

export type GiveawayCompleted = {
  winner_count: number;
  unclaimed_prize_count: number;
  giveaway_message: Message;
};
