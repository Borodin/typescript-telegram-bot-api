import { MaybeInaccessibleMessage, MessageEntity } from './';

/**
 * ## PollOptionDeleted
 * Describes a service message about an option deleted from a poll.
 * @see https://core.telegram.org/bots/api#polloptiondeleted
 */
export type PollOptionDeleted = {
  /**
   * Optional. Message containing the poll from which the option was deleted, if known. Note that the Message object in
   * this field will not contain the reply_to_message field even if it itself is a reply.
   */
  poll_message?: MaybeInaccessibleMessage;

  /**
   * Unique identifier of the deleted option
   */
  option_persistent_id: string;

  /**
   * Option text
   */
  option_text: string;

  /**
   * Optional. Special entities that appear in the option_text
   */
  option_text_entities?: MessageEntity[];
};
