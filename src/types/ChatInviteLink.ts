import { User } from './';

/**
 * ## ChatInviteLink
 * Represents an invite link for a chat.
 * @see https://core.telegram.org/bots/api#chatinvitelink
 */
export type ChatInviteLink = {
  invite_link: string;
  creator: User;
  creates_join_request: boolean;
  is_primary: boolean;
  is_revoked: boolean;
  name?: string;
  expire_date?: number;
  member_limit?: number;
  pending_join_request_count?: number;
};
