/**
 * ## SwitchInlineQueryChosenChat
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an
 * optional default inline query.
 * @see https://core.telegram.org/bots/api#switchinlinequerychosenchat
 */
export type SwitchInlineQueryChosenChat = {
  /**
   * Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will
   * be inserted
   */
  query: string;

  /**
   * Optional. True, if private chats with users can be chosen
   */
  allow_user_chats?: boolean;

  /**
   * Optional. True, if private chats with bots can be chosen
   */
  allow_bot_chats?: boolean;

  /**
   * Optional. True, if group and supergroup chats can be chosen
   */
  allow_group_chats?: boolean;

  /**
   * Optional. True, if channel chats can be chosen
   */
  allow_channel_chats?: boolean;
};
