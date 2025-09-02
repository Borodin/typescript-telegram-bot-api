import { MessageEntity, ChecklistTask } from './';

/**
 * ## Checklist
 * Describes a checklist.
 * @see https://core.telegram.org/bots/api#checklist
 */
export type Checklist = {
  /**
   * Title of the checklist
   */
  title: string;

  /**
   * Optional. Special entities that appear in the checklist title
   */
  title_entities?: MessageEntity[];

  /**
   * List of tasks in the checklist
   */
  tasks: ChecklistTask[];

  /**
   * Optional. True, if users other than the creator of the list can add tasks to the list
   */
  others_can_add_tasks?: true;

  /**
   * Optional. True, if users other than the creator of the list can mark tasks as done or not done
   */
  others_can_mark_tasks_as_done?: true;
};
