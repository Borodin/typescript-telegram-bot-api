/**
 * ## EphemeralMessageParameters
 * Contains parameters of an outgoing ephemeral message.
 * @see https://core.telegram.org/bots/api#ephemeralmessageparameters
 */
export type EphemeralMessageParameters = {
  /**
   * Identifier of the user who will receive the message. It is not guaranteed that the user will receive the message,
   * especially if they are offline. See ephemeral messages and commands for more details.
   */
  receiver_user_id: number;

  /**
   * Optional. Identifier of the callback query which triggered the message, if any
   */
  callback_query_id?: string;

  /**
   * Optional. Pass True if the ephemeral message must be shown in place of the original message. Must be False for
   * callback queries from ephemeral messages, which must be edited using regular editEphemeralMessage… methods.
   */
  replace_callback_query_message?: boolean;
};
