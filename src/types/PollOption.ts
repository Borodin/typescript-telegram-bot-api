import { MessageEntity, User, Chat } from './';

/**
 * ## PollOption
 * This object contains information about one answer option in a poll.
 * @see https://core.telegram.org/bots/api#polloption
 */
export type PollOption = {
  /**
   * Unique identifier of the option, persistent on option addition and deletion
   */
  persistent_id: string;

  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in
   * poll option texts
   */
  text_entities?: MessageEntity[];

  /**
   * Number of users who voted for this option; may be 0 if unknown
   */
  voter_count: number;

  /**
   * Optional. User who added the option; omitted if the option wasn't added by a user after poll creation
   */
  added_by_user?: User;

  /**
   * Optional. Chat that added the option; omitted if the option wasn't added by a chat after poll creation
   */
  added_by_chat?: Chat;

  /**
   * Optional. Point in time (Unix timestamp) when the option was added; omitted if the option existed in the original
   * poll
   */
  addition_date?: number;
};
