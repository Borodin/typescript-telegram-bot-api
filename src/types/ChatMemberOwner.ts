import { User } from './';

export type ChatMemberOwner = {
  status: 'creator';
  user: User;
  is_anonymous: boolean;
  custom_title?: string;
};
