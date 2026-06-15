import { Audio, RichBlockCaption } from './';

/**
 * ## RichBlockAudio
 * A block with a music file, corresponding to the HTML tag <audio>.
 * @see https://core.telegram.org/bots/api#richblockaudio
 */
export type RichBlockAudio = {
  /**
   * Type of the block, always "audio"
   */
  type: 'audio';

  /**
   * The audio
   */
  audio: Audio;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
