import { Chat, ChatInviteLink, User } from './';

/**
 * ## ChatJoinRequest
 * Represents a join request sent to a chat.
 * @see https://core.telegram.org/bots/api#chatjoinrequest
 */
export type ChatJoinRequest = {

  /**
   * Chat to which the request was sent
   */
  chat: Chat;

  /**
   * User that sent the join request
   */
  from: User;

  /**
   * Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant
   * bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52
   * significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot
   * can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other
   * administrator contacted the user.
   */
  user_chat_id: number;

  /**
   * Date the request was sent in Unix time
   */
  date: number;

  /**
   * Optional. Bio of the user.
   */
  bio?: string;

  /**
   * Optional. Chat invite link that was used by the user to send the join request
   */
  invite_link?: ChatInviteLink;
};
