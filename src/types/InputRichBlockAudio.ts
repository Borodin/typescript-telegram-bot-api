import { InputMediaAudio, RichBlockCaption } from './';

/**
 * ## InputRichBlockAudio
 * A block with a music file, corresponding to the HTML tag <audio>.
 * @see https://core.telegram.org/bots/api#inputrichblockaudio
 */
export type InputRichBlockAudio = {
  /**
   * Type of the block, always "audio"
   */
  type: 'audio';

  /**
   * The audio. Caption is ignored.
   */
  audio: InputMediaAudio;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
