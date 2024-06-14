import { MessageEntity } from './';

export type TextQuote = {
  text: string;
  entities: MessageEntity[];
  position: number;
  is_manual: boolean;
};
