import { RichText } from './';

/**
 * ## RichTextBotCommand
 * A bot command.
 * @see https://core.telegram.org/bots/api#richtextbotcommand
 */
export type RichTextBotCommand = {
  /**
   * Type of the rich text, always "bot_command"
   */
  type: 'bot_command';

  /**
   * The text
   */
  text: RichText;

  /**
   * The bot command
   */
  bot_command: string;
};
