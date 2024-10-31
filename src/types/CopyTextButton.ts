/**
 * ## CopyTextButton
 * This object represents an inline keyboard button that copies specified text to the clipboard.
 * @see https://core.telegram.org/bots/api#copytextbutton
 */
export type CopyTextButton = {
  /**
   * The text to be copied to the clipboard; 1-256 characters
   */
  text: string;
};
