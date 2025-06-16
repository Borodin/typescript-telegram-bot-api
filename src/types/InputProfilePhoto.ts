import { InputProfilePhotoStatic, InputProfilePhotoAnimated } from './';

/**
 * ## InputProfilePhoto
 * This object describes a profile photo to be set for a user or bot.
 * @see https://core.telegram.org/bots/api#inputprofilephoto
 */
export type InputProfilePhoto = InputProfilePhotoStatic | InputProfilePhotoAnimated;
