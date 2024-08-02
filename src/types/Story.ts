import { Chat } from './Chat';

/**
 * ## Story
 * This object represents a story.
 * @see https://core.telegram.org/bots/api#story
 */
export type Story = {
  chat: Chat;
  id: number;
};
