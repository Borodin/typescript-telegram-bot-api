import {
  InlineQuery,
  Message,
  BusinessConnection,
  BusinessMessagesDeleted,
  MessageReactionUpdated,
  MessageReactionCountUpdated,
  ChosenInlineResult,
  CallbackQuery,
  ShippingQuery,
  PreCheckoutQuery,
  Poll,
  PollAnswer,
  ChatMemberUpdated,
  ChatJoinRequest,
  ChatBoostUpdated,
  ChatBoostRemoved,
} from './';

/**
 * @see https://core.telegram.org/bots/api#update
 */
export interface EventTypes {
  message: Message;
  edited_message: Message;
  channel_post: Message;
  edited_channel_post: Message;
  business_connection: BusinessConnection;
  business_message: Message;
  edited_business_message: Message;
  deleted_business_messages: BusinessMessagesDeleted;
  message_reaction: MessageReactionUpdated;
  message_reaction_count: MessageReactionCountUpdated;
  inline_query: InlineQuery;
  chosen_inline_result: ChosenInlineResult;
  callback_query: CallbackQuery;
  shipping_query: ShippingQuery;
  pre_checkout_query: PreCheckoutQuery;
  poll: Poll;
  poll_answer: PollAnswer;
  my_chat_member: ChatMemberUpdated;
  chat_member: ChatMemberUpdated;
  chat_join_request: ChatJoinRequest;
  chat_boost: ChatBoostUpdated;
  removed_chat_boost: ChatBoostRemoved;
}

/**
 * All possible update types.
 * @see https://core.telegram.org/bots/api#update
 */
export type UpdateType = keyof EventTypes;

/**
 * A TypeScript utility type that enforces only one or none specified properties of a given type to be present.
 */
type AtMostOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]: { [P in K]: T[K] } & Partial<Record<Exclude<Keys, K>, never>>;
}[Keys];

/**
 * ## Update
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 * @see https://core.telegram.org/bots/api#update
 */
export type Update = {
  update_id: number;
} & AtMostOne<{
  [K in UpdateType]: EventTypes[K];
}>;
