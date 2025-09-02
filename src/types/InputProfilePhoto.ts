import { InputProfilePhotoStatic, InputProfilePhotoAnimated } from './';

/**
 * ## InputProfilePhoto
 * This object describes a profile photo to set. Currently, it can be one of:
 * - InputProfilePhotoStatic
 * - InputProfilePhotoAnimated
 * @see https://core.telegram.org/bots/api#inputprofilephoto
 */
export type InputProfilePhoto = InputProfilePhotoStatic | InputProfilePhotoAnimated;
