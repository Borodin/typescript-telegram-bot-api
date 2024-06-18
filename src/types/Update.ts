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

export type UpdateType = keyof EventTypes;

type AtMostOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]: { [P in K]: T[K] } & Partial<Record<Exclude<Keys, K>, never>>;
}[Keys];

export type Update = {
  update_id: number;
} & AtMostOne<{
  [K in UpdateType]: EventTypes[K];
}>;
