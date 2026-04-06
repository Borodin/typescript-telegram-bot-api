import { User } from './';

/**
 * ## ManagedBotUpdated
 * This object contains information about the creation or token update of a bot that is managed by the current bot.
 * @see https://core.telegram.org/bots/api#managedbotupdated
 */
export type ManagedBotUpdated = {
  /**
   * User that created the bot
   */
  user: User;

  /**
   * Information about the bot. Token of the bot can be fetched using the method getManagedBotToken.
   */
  bot: User;
};
