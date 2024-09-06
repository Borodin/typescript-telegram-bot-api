/**
 * ## SentWebAppMessage
 * Describes an inline message sent by a Web App on behalf of a user.
 * @see https://core.telegram.org/bots/api#sentwebappmessage
 */
export type SentWebAppMessage = {

  /**
   * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the
   * message.
   */
  inline_message_id: string;
};
