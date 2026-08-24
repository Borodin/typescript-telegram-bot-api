import { WebAppInfo, LoginUrl, SwitchInlineQueryChosenChat, CopyTextButton, DisabledButton, RichText } from './';

/**
 * ## RichMessageButton
 * This object represents a button in a RichMessage. Exactly one of the fields other than text and style must be used
 * to specify the type of the button.
 * @see https://core.telegram.org/bots/api#richmessagebutton
 */
export type RichMessageButton = {
  /**
   * Text of the button. May contain only plain text, RichTextCustomEmoji and RichTextDateTime entities.
   */
  text: RichText;

  /**
   * Optional. Style of the button. Must be one of "danger" (red), "success" (green), "primary" (blue) or "link" (the
   * button is shown as a regular link without borders). If omitted, then an app-specific style is used. The style
   * "link" is allowed only for callback buttons.
   */
  style?: string;

  /**
   * Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to
   * mention a user by their identifier without using a username, if this is allowed by their privacy settings.
   */
  url?: string;

  /**
   * Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
   */
  callback_data?: string;

  /**
   * Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be
   * able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in
   * private chats between a user and the bot. Not supported for messages sent on behalf of a business account.
   */
  web_app?: WebAppInfo;

  /**
   * Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram
   * Login Widget. Not supported for ephemeral messages.
   */
  login_url?: LoginUrl;

  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert
   * the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's
   * username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a
   * business account.
   */
  switch_inline_query?: string;

  /**
   * Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current
   * chat's input field. May be empty, in which case only the bot's username will be inserted. Not supported in channels
   * and for messages sent in channel direct messages chats and on behalf of a business account.
   */
  switch_inline_query_current_chat?: string;

  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open
   * that chat and insert the bot's username and the specified inline query in the input field. Not supported for
   * messages sent in channel direct messages chats and on behalf of a business account.
   */
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;

  /**
   * Optional. A button that copies the specified text to the clipboard
   */
  copy_text?: CopyTextButton;

  /**
   * Optional. If set, then the button is disabled and does nothing
   */
  disabled?: DisabledButton;
};
