/**
 * ## BotCommand
 * This object represents a bot command.
 * @see https://core.telegram.org/bots/api#botcommand
 */
export type BotCommand = {
  /**
   * Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
   */
  command: string;

  /**
   * Description of the command; 1-256 characters.
   */
  description: string;

  /**
   * Optional. True, if the command sends an ephemeral message, which can be seen only by the sender of the message and
   * the bot
   */
  is_ephemeral?: boolean;
};
