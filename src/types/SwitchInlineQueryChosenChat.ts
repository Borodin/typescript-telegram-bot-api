/**
 * ## SwitchInlineQueryChosenChat
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 * @see https://core.telegram.org/bots/api#switchinlinequerychosenchat
 */
export type SwitchInlineQueryChosenChat = {
  query: string;
  allow_user_chats?: boolean;
  allow_bot_chats?: boolean;
  allow_group_chats?: boolean;
  allow_channel_chats?: boolean;
};
