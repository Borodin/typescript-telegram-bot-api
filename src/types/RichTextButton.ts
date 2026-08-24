import { RichMessageButton } from './';

/**
 * ## RichTextButton
 * A button.
 * @see https://core.telegram.org/bots/api#richtextbutton
 */
export type RichTextButton = {
  /**
   * Type of the rich text, always "button"
   */
  type: 'button';

  /**
   * The button
   */
  button: RichMessageButton;
};
