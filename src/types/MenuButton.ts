import { MenuButtonCommands, MenuButtonWebApp, MenuButtonDefault } from './';

export type MenuButton =
  | MenuButtonCommands
  | MenuButtonWebApp
  | MenuButtonDefault;
