import { User } from './';

/**
 * ## VideoChatParticipantsInvited
 * This object represents a service message about new members invited to a video chat.
 * @see https://core.telegram.org/bots/api#videochatparticipantsinvited
 */
export type VideoChatParticipantsInvited = {
  users: User[];
};
