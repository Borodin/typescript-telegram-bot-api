import { Chat, ChatInviteLink, User } from './';

/**
 * ## ChatJoinRequest
 * Represents a join request sent to a chat.
 * @see https://core.telegram.org/bots/api#chatjoinrequest
 */
export type ChatJoinRequest = {
  chat: Chat;
  from: User;
  user_chat_id: number;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
};
