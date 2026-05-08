/**
 * ## PaidMessagePriceChanged
 * Describes a service message about a change in the price of paid messages within a chat.
 * @see https://core.telegram.org/bots/api#paidmessagepricechanged
 */
export type PaidMessagePriceChanged = {
  /**
   * The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each
   * sent message
   */
  paid_message_star_count: number;
};
