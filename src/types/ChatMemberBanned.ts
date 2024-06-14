import { User } from './';

export type ChatMemberBanned = {
  status: 'kicked';
  user: User;
  until_date: number;
};
