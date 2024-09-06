import { Chat } from './Chat';

/**
 * ## Story
 * This object represents a story.
 * @see https://core.telegram.org/bots/api#story
 */
export type Story = {

  /**
   * Chat that posted the story
   */
  chat: Chat;

  /**
   * Unique identifier for the story in the chat
   */
  id: number;
};
