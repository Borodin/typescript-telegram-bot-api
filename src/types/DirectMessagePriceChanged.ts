/**
 * ## DirectMessagePriceChanged
 * Describes a service message about a change in the price of direct messages sent to a channel chat.
 * @see https://core.telegram.org/bots/api#directmessagepricechanged
 */
export type DirectMessagePriceChanged = {
  /**
   * True, if direct messages are enabled for the channel chat; false otherwise
   */
  are_direct_messages_enabled: boolean;

  /**
   * Optional. The new number of Telegram Stars that must be paid by users for each direct message sent to the
   * channel. Does not apply to users who have been exempted by administrators. Defaults to 0.
   */
  direct_message_star_count?: number;
};
