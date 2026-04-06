import { User } from './';

/**
 * ## ManagedBotCreated
 * This object contains information about the bot that was created to be managed by the current bot.
 * @see https://core.telegram.org/bots/api#managedbotcreated
 */
export type ManagedBotCreated = {
  /**
   * Information about the bot. The bot's token can be fetched using the method getManagedBotToken.
   */
  bot: User;
};
