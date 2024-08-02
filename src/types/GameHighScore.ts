import { User } from './';

/**
 * ## GameHighScore
 * This object represents one row of the high scores table for a game.
 * @see https://core.telegram.org/bots/api#gamehighscore
 */
export type GameHighScore = {
  position: number;
  user: User;
  score: number;
};
