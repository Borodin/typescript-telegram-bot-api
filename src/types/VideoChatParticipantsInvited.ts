import { User } from './';

/**
 * ## VideoChatParticipantsInvited
 * This object represents a service message about new members invited to a video chat.
 * @see https://core.telegram.org/bots/api#videochatparticipantsinvited
 */
export type VideoChatParticipantsInvited = {
  /**
   * New members that were invited to the video chat
   */
  users: User[];
};
