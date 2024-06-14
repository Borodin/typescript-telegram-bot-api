import { User } from './';

export type ChosenInlineResult = {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
};
