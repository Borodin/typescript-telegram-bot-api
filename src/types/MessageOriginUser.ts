import { User } from './User';

export type MessageOriginUser = {
  type: 'user';
  date: number;
  sender_user: User;
};
