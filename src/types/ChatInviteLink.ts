import { User } from './';

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
