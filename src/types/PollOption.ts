import { MessageEntity } from './MessageEntity';

export type PollOption = {
  text: string;
  text_entities?: MessageEntity[];
  voter_count: number;
};
