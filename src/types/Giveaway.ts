import { Chat, User } from './';

/**
 * ## Giveaway
 * This object represents a message about a scheduled giveaway.
 * @see https://core.telegram.org/bots/api#giveaway
 */
export type Giveaway = {
  chat: Chat;
  giveaway_message_id: number;
  winners_selection_date: number;
  winner_count: number;
  winners: User[];
  additional_chat_count?: number;
  premium_subscription_month_count?: number;
  unclaimed_prize_count?: number;
  only_new_members?: boolean;
  was_refunded?: boolean;
  prize_description?: string;
};
