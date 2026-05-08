import { User } from './';

/**
 * ## BotAccessSettings
 * This object describes the access settings of a bot.
 * @see https://core.telegram.org/bots/api#botaccesssettings
 */
export type BotAccessSettings = {
  /**
   * True, if only selected users can access the bot. The bot's owner can always access it.
   */
  is_access_restricted: boolean;

  /**
   * Optional. The list of other users who have access to the bot if the access is restricted
   */
  added_users?: User[];
};
