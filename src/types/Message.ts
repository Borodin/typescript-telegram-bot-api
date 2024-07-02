import {
  ExternalReplyInfo,
  Sticker,
  Venue,
  Location,
  Animation,
  Document,
  MaybeInaccessibleMessage,
  ChatBackground,
  GiveawayCompleted,
  MessageEntity,
  LinkPreviewOptions,
  Poll,
  InlineKeyboardMarkup,
  User,
  PassportData,
  Game,
  PhotoSize,
  Audio,
  Chat,
  TextQuote,
  Story,
  WriteAccessAllowed,
  ProximityAlertTriggered,
  Giveaway,
  GiveawayWinners,
  WebAppData,
  Voice,
  VideoNote,
  VideoChatStarted,
  VideoChatScheduled,
  VideoChatEnded,
  VideoChatParticipantsInvited,
  SuccessfulPayment,
  Video,
  UsersShared,
  MessageOrigin,
  MessageAutoDeleteTimerChanged,
  Invoice,
  GiveawayCreated,
  GeneralForumTopicUnhidden,
  GeneralForumTopicHidden,
  ForumTopicReopened,
  ForumTopicEdited,
  ForumTopicCreated,
  ForumTopicClosed,
  Dice,
  Contact,
  ChatShared,
  ChatBoostAdded,
  PaidMediaInfo,
} from './';

export type Message = {
  message_id: number;
  message_thread_id?: number;
  from?: User;
  sender_chat?: Chat;
  sender_boost_count?: number;
  sender_business_bot?: User;
  date: number;
  business_connection_id?: string;
  chat: Chat;
  forward_origin?: MessageOrigin;
  is_topic_message?: boolean;
  is_automatic_forward?: boolean;
  reply_to_message?: Message;
  external_reply?: ExternalReplyInfo;
  quote?: TextQuote;
  reply_to_story?: Story;
  via_bot?: User;
  edit_date?: number;
  has_protected_content?: boolean;
  is_from_offline?: boolean;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: MessageEntity[];
  link_preview_options?: LinkPreviewOptions;
  effect_id?: string;
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  paid_media?: PaidMediaInfo;
  photo?: PhotoSize[];
  sticker?: Sticker;
  story?: Story;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  has_media_spoiler?: boolean;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: boolean;
  group_chat_created?: boolean;
  supergroup_chat_created?: boolean;
  channel_chat_created?: boolean;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: MaybeInaccessibleMessage;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  users_shared?: UsersShared;
  chat_shared?: ChatShared;
  connected_website?: string;
  write_access_allowed?: WriteAccessAllowed;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  boost_added?: ChatBoostAdded;
  chat_background_set?: ChatBackground;
  forum_topic_created?: ForumTopicCreated;
  forum_topic_edited?: ForumTopicEdited;
  forum_topic_closed?: ForumTopicClosed;
  forum_topic_reopened?: ForumTopicReopened;
  general_forum_topic_hidden?: GeneralForumTopicHidden;
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
  giveaway_created?: GiveawayCreated;
  Giveaway?: Giveaway;
  giveaway_winners?: GiveawayWinners;
  giveaway_completed?: GiveawayCompleted;
  video_chat_scheduled?: VideoChatScheduled;
  video_chat_started?: VideoChatStarted;
  video_chat_ended?: VideoChatEnded;
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  web_app_data?: WebAppData;
  reply_markup?: InlineKeyboardMarkup;
};

export const messageTypes = [
  'text',
  'animation',
  'audio',
  'contact',
  'dice',
  'document',
  'game',
  'invoice',
  'location',
  'passport_data',
  'photo',
  'pinned_message',
  'poll',
  'sticker',
  'video',
  'video_note',
  'voice',
  'successful_payment',
  'migrate_from_chat_id',
  'migrate_to_chat_id',
  'new_chat_members',
  'new_chat_photo',
  'new_chat_title',
  'left_chat_member',
  'delete_chat_photo',
  'group_chat_created',
  'supergroup_chat_created',
  'channel_chat_created',
  'message_auto_delete_timer_changed',
  'video_chat_scheduled',
  'video_chat_started',
  'video_chat_ended',
  'video_chat_participants_invited',
  'web_app_data',
] as const;

export type MessageTypes = {
  [P in (typeof messageTypes)[number] as `message:${P}`]: Message &
    Required<Pick<Message, P>>;
};
