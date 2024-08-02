import { MenuButtonCommands, MenuButtonWebApp, MenuButtonDefault } from './';

/**
 * ## MenuButton
 * This object describes the bot's menu button in a private chat. It should be one of
 * - MenuButtonCommands
 * - MenuButtonWebApp
 * - MenuButtonDefault
 * @see https://core.telegram.org/bots/api#menubutton
 */
export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;
