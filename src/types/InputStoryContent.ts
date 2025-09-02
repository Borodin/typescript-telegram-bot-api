import { InputStoryContentPhoto, InputStoryContentVideo } from './';

/**
 * ## InputStoryContent
 * This object describes the content of a story to be set for a user or chat.
 * Currently, it can be one of:
 * - InputStoryContentPhoto
 * - InputStoryContentVideo
 * @see https://core.telegram.org/bots/api#inputstorycontent
 */
export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;
