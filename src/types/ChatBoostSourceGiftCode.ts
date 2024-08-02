import { User } from './';

/**
 * ## ChatBoostSourceGiftCode
 * The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
 * @see https://core.telegram.org/bots/api#chatboostsourcegiftcode
 */
export type ChatBoostSourceGiftCode = {
  source: 'gift_code';
  user: User;
};
