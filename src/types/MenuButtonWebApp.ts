import { WebAppInfo } from './';

/**
 * ## MenuButtonWebApp
 * Represents a menu button, which launches a Web App.
 * @see https://core.telegram.org/bots/api#menubuttonwebapp
 */
export type MenuButtonWebApp = {
  type: 'web_app';
  text: string;
  web_app: WebAppInfo;
};
