import { RichText } from './';

/**
 * ## RichBlockThinking
 * A block with a "Thinking…" placeholder, corresponding to the custom HTML tag <tg-thinking>. The block may be used
 * only in sendRichMessageDraft, therefore it can't be received in messages. See https://t.me/addemoji/AIActions for
 * examples of custom emoji, which are recommended for usage in the block.
 * @see https://core.telegram.org/bots/api#richblockthinking
 */
export type RichBlockThinking = {
  /**
   * Type of the block, always "thinking"
   */
  type: 'thinking';

  /**
   * Text of the block. See https://t.me/addemoji/AIActions for examples of custom emoji, which are recommended for
   * usage in the block.
   */
  text: RichText;
};
