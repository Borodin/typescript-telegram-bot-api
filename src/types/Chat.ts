/**
 * ## Chat
 * This object represents a chat.
 * @see https://core.telegram.org/bots/api#chat
 */
export type Chat = {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  is_forum?: boolean;
};
