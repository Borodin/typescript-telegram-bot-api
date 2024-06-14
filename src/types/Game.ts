import { MessageEntity, PhotoSize } from './';

export type Game = {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
};
