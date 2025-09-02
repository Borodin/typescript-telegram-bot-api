import { InputStoryContentPhoto, InputStoryContentVideo } from './';

/**
 * ## InputStoryContent
 * his object describes the content of a story to post. Currently, it can be one of
 * - InputStoryContentPhoto
 * - InputStoryContentVideo
 * @see https://core.telegram.org/bots/api#inputstorycontent
 */
export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;
