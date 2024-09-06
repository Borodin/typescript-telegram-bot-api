/**
 * ## VideoChatScheduled
 * This object represents a service message about a video chat scheduled in the chat.
 * @see https://core.telegram.org/bots/api#videochatscheduled
 */
export type VideoChatScheduled = {
  /**
   * Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
   */
  start_date: number;
};
