/**
 * ## KeyboardButtonRequestManagedBot
 * This object defines the parameters for the creation of a managed bot. Information about the created bot will be
 * shared with the bot using the update managed_bot and a Message with the field managed_bot_created.
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestmanagedbot
 */
export type KeyboardButtonRequestManagedBot = {
  /**
   * Signed 32-bit identifier of the request. Must be unique within the message
   */
  request_id: number;

  /**
   * Optional. Suggested name for the bot
   */
  suggested_name?: string;

  /**
   * Optional. Suggested username for the bot
   */
  suggested_username?: string;
};
