import { MessageEntity, PhotoSize } from './';

/**
 * ## Game
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 * @see https://core.telegram.org/bots/api#game
 */
export type Game = {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
};
