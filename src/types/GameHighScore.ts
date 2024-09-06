import { User } from './';

/**
 * ## GameHighScore
 * This object represents one row of the high scores table for a game.
 * @see https://core.telegram.org/bots/api#gamehighscore
 */
export type GameHighScore = {
  /**
   * Position in high score table for the game
   */
  position: number;

  /**
   * User
   */
  user: User;

  /**
   * Score
   */
  score: number;
};
