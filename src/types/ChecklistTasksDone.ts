import { Message } from './';

/**
 * ## ChecklistTasksDone
 * Describes a service message about checklist tasks marked as done or not done.
 * @see https://core.telegram.org/bots/api#checklisttasksdone
 */
export type ChecklistTasksDone = {
  /**
   * Optional. Message containing the checklist whose tasks were marked as done or not done. Note that the Message
   * object in this field will not contain the reply_to_message field even if it itself is a reply.
   */
  checklist_message?: Message;

  /**
   * Optional. Identifiers of the tasks that were marked as done
   */
  marked_as_done_task_ids?: number[];

  /**
   * Optional. Identifiers of the tasks that were marked as not done
   */
  marked_as_not_done_task_ids?: number[];
};
