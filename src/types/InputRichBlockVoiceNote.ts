import { InputMediaVoiceNote, RichBlockCaption } from './';

/**
 * ## InputRichBlockVoiceNote
 * A block with a voice note, corresponding to the HTML tag <audio>.
 * @see https://core.telegram.org/bots/api#inputrichblockvoicenote
 */
export type InputRichBlockVoiceNote = {
  /**
   * Type of the block, always "voice_note"
   */
  type: 'voice_note';

  /**
   * The voice note. Caption is ignored.
   */
  voice_note: InputMediaVoiceNote;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
