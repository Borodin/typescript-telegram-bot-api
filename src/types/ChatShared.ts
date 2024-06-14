import { PhotoSize } from './';

export type ChatShared = {
  request_id: number;
  chat_id: number;
  title?: string;
  username?: string;
  photo?: PhotoSize[];
};
