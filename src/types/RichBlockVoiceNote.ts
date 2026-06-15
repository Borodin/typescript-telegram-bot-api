import { RichBlockCaption, Voice } from './';

/**
 * ## RichBlockVoiceNote
 * A block with a voice note, corresponding to the HTML tag <audio>.
 * @see https://core.telegram.org/bots/api#richblockvoicenote
 */
export type RichBlockVoiceNote = {
  /**
   * Type of the block, always "voice_note"
   */
  type: 'voice_note';

  /**
   * The voice note
   */
  voice_note: Voice;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
