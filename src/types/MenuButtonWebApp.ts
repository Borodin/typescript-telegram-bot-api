import { WebAppInfo } from './';

/**
 * ## MenuButtonWebApp
 * Represents a menu button, which launches a Web App.
 * @see https://core.telegram.org/bots/api#menubuttonwebapp
 */
export type MenuButtonWebApp = {

  /**
   * Type of the button, must be web_app
   */
  type: 'web_app';

  /**
   * Text on the button
   */
  text: string;

  /**
   * Description of the Web App that will be launched when the user presses the button. The Web App will be able to send
   * an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a `t.me` link to a
   * Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be
   * opened as if the user pressed the link.
   */
  web_app: WebAppInfo;
};
