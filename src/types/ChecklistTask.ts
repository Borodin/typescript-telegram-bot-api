import { MessageEntity, User } from './';

/**
 * ## ChecklistTask
 * Describes a task in a checklist.
 * @see https://core.telegram.org/bots/api#checklisttask
 */
export type ChecklistTask = {
  /**
   * Unique identifier of the task
   */
  id: number;

  /**
   * Text of the task
   */
  text: string;

  /**
   * Optional. Special entities that appear in the task text
   */
  text_entities?: MessageEntity[];

  /**
   * Optional. User that completed the task; omitted if the task wasn't completed
   */
  completed_by_user?: User;

  /**
   * Optional. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed
   */
  completion_date?: number;
};
