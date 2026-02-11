import { Audio } from './';

/**
 * ## UserProfileAudios
 * This object represents the audios displayed on a user's profile.
 * @see https://core.telegram.org/bots/api#userprofileaudios
 */
export type UserProfileAudios = {
  /**
   * Total number of profile audios for the target user
   */
  total_count: number;

  /**
   * Requested profile audios
   */
  audios: Audio[];
};
