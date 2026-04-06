import { MaybeInaccessibleMessage, MessageEntity } from './';

/**
 * ## PollOptionAdded
 * Describes a service message about an option added to a poll.
 * @see https://core.telegram.org/bots/api#polloptionadded
 */
export type PollOptionAdded = {
  /**
   * Optional. Message containing the poll to which the option was added, if known. Note that the Message object in this
   * field will not contain the reply_to_message field even if it itself is a reply.
   */
  poll_message?: MaybeInaccessibleMessage;

  /**
   * Unique identifier of the added option
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
