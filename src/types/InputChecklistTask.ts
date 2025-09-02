import { MessageEntity, ParseMode } from './';

/**
 * ## InputChecklistTask
 * Describes a task to add to a checklist.
 * @see https://core.telegram.org/bots/api#inputchecklisttask
 */
export type InputChecklistTask = {
  /**
   * Unique identifier of the task; must be positive and unique among all task identifiers currently present in the
   * checklist
   */
  id: number;

  /**
   * Text of the task; 1-100 characters after entities parsing
   */
  text: string;

  /**
   * Optional. Mode for parsing entities in the text. See formatting options for more details.
   */
  parse_mode?: ParseMode;

  /**
   * Optional. List of special entities that appear in the text, which can be specified instead of parse_mode.
   * Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
   */
  text_entities?: MessageEntity[];
};
