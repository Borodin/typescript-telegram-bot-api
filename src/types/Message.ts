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
  RefundedPayment,
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

/**
 * ## Message
 * This object represents a message.
 * @see https://core.telegram.org/bots/api#message
 */
export type Message = {
  /**
   * Unique message identifier inside this chat
   */
  message_id: number;

  /**
   * Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
   */
  message_thread_id?: number;

  /**
   * Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the
   * message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats
   */
  from?: User;

  /**
   * Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages
   * sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's
   * discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains
   * a fake sender user in non-channel chats.
   */
  sender_chat?: Chat;

  /**
   * Optional. If the sender of the message boosted the chat, the number of boosts added by the user
   */
  sender_boost_count?: number;

  /**
   * Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing
   * messages sent on behalf of the connected business account.
   */
  sender_business_bot?: User;

  /**
   * Date the message was sent in Unix time. It is always a positive number, representing a valid date.
   */
  date: number;

  /**
   * Optional. Unique identifier of the business connection from which the message was received. If non-empty, the
   * message belongs to a chat of the corresponding business account that is independent from any potential bot chat
   * which might share the same identifier.
   */
  business_connection_id?: string;

  /**
   * Chat the message belongs to
   */
  chat: Chat;

  /**
   * Optional. Information about the original message for forwarded messages
   */
  forward_origin?: MessageOrigin;

  /**
   * Optional. True, if the message is sent to a forum topic
   */
  is_topic_message?: boolean;

  /**
   * Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
   */
  is_automatic_forward?: boolean;

  /**
   * Optional. For replies in the same chat and message thread, the original message. Note that the Message object in
   * this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  reply_to_message?: Message;

  /**
   * Optional. Information about the message that is being replied to, which may come from another chat or forum topic
   */
  external_reply?: ExternalReplyInfo;

  /**
   * Optional. For replies that quote part of the original message, the quoted part of the message
   */
  quote?: TextQuote;

  /**
   * Optional. For replies to a story, the original story
   */
  reply_to_story?: Story;

  /**
   * Optional. Bot through which the message was sent
   */
  via_bot?: User;

  /**
   * Optional. Date the message was last edited in Unix time
   */
  edit_date?: number;

  /**
   * Optional. True, if the message can't be forwarded
   */
  has_protected_content?: boolean;

  /**
   * Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business
   * message, or as a scheduled message
   */
  is_from_offline?: boolean;

  /**
   * Optional. The unique identifier of a media message group this message belongs to
   */
  media_group_id?: string;

  /**
   * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group
   * administrator
   */
  author_signature?: string;

  /**
   * Optional. For text messages, the actual UTF-8 text of the message
   */
  text?: string;

  /**
   * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  entities?: MessageEntity[];

  /**
   * Optional. Options used for link preview generation for the message, if it is a text message and link preview
   * options were changed
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * Optional. Unique identifier of the message effect added to the message
   */
  effect_id?: string;

  /**
   * Optional. Message is an animation, information about the animation. For backward compatibility, when this field is
   * set, the document field will also be set
   */
  animation?: Animation;

  /**
   * Optional. Message is an audio file, information about the file
   */
  audio?: Audio;

  /**
   * Optional. Message is a general file, information about the file
   */
  document?: Document;

  /**
   * Optional. Message contains paid media; information about the paid media
   */
  paid_media?: PaidMediaInfo;

  /**
   * Optional. Message is a photo, available sizes of the photo
   */
  photo?: PhotoSize[];

  /**
   * Optional. Message is a sticker, information about the sticker
   */
  sticker?: Sticker;

  /**
   * Optional. Message is a forwarded story
   */
  story?: Story;

  /**
   * Optional. Message is a video, information about the video
   */
  video?: Video;

  /**
   * Optional. Message is a video note, information about the video message
   */
  video_note?: VideoNote;

  /**
   * Optional. Message is a voice message, information about the file
   */
  voice?: Voice;

  /**
   * Optional. Caption for the animation, audio, document, paid media, photo, video or voice
   */
  caption?: string;

  /**
   * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the
   * caption
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Optional. True, if the message media is covered by a spoiler animation
   */
  has_media_spoiler?: boolean;

  /**
   * Optional. Message is a shared contact, information about the contact
   */
  contact?: Contact;

  /**
   * Optional. Message is a dice with random value
   */
  dice?: Dice;

  /**
   * Optional. Message is a game, information about the game. [More about games](https://core.telegram.org/bots/api#games)
   */
  game?: Game;

  /**
   * Optional. Message is a native poll, information about the poll
   */
  poll?: Poll;

  /**
   * Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the
   * location field will also be set
   */
  venue?: Venue;

  /**
   * Optional. Message is a shared location, information about the location
   */
  location?: Location;

  /**
   * Optional. New members that were added to the group or supergroup and information about them (the bot itself may be
   * one of these members)
   */
  new_chat_members?: User[];

  /**
   * Optional. A member was removed from the group, information about them (this member may be the bot itself)
   */
  left_chat_member?: User;

  /**
   * Optional. A chat title was changed to this value
   */
  new_chat_title?: string;

  /**
   * Optional. A chat photo was change to this value
   */
  new_chat_photo?: PhotoSize[];

  /**
   * Optional. Service message: the chat photo was deleted
   */
  delete_chat_photo?: boolean;

  /**
   * Optional. Service message: the group has been created
   */
  group_chat_created?: boolean;

  /**
   * Optional. Service message: the supergroup has been created. This field can't be received in a message coming
   * through updates, because bot can't be a member of a supergroup when it is created. It can only be found in
   * reply_to_message if someone replies to a very first message in a directly created supergroup.
   */
  supergroup_chat_created?: boolean;

  /**
   * Optional. Service message: the channel has been created. This field can't be received in a message coming through
   * updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message
   * if someone replies to a very first message in a channel.
   */
  channel_chat_created?: boolean;

  /**
   * Optional. Service message: auto-delete timer settings changed in the chat
   */
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;

  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more
   * than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for
   * storing this identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more
   * than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for
   * storing this identifier.
   */
  migrate_from_chat_id?: number;

  /**
   * Optional. Specified message was pinned. Note that the Message object in this field will not contain further
   * reply_to_message fields even if it itself is a reply.
   */
  pinned_message?: MaybeInaccessibleMessage;

  /**
   * Optional. Message is an invoice for a payment, information about the invoice. [More about payments](https://core.telegram.org/bots/api#payments)
   */
  invoice?: Invoice;

  /**
   * Optional. Message is a service message about a successful payment, information about the payment. [More about payments](https://core.telegram.org/bots/api#payments)
   */
  successful_payment?: SuccessfulPayment;

  /**
   * Optional. Message is a service message about a refunded payment, information about the payment. [More about payments](https://core.telegram.org/bots/api#payments)
   */
  refunded_payment?: RefundedPayment;

  /**
   * Optional. Service message: users were shared with the bot
   */
  users_shared?: UsersShared;

  /**
   * Optional. Service message: a chat was shared with the bot
   */
  chat_shared?: ChatShared;

  /**
   * Optional. The domain name of the website on which the user has logged in. [More about Telegram Login](https://core.telegram.org/widgets/login)
   */
  connected_website?: string;

  /**
   * Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side
   * menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method
   * requestWriteAccess
   */
  write_access_allowed?: WriteAccessAllowed;

  /**
   * Optional. Telegram Passport data
   */
  passport_data?: PassportData;

  /**
   * Optional. Service message. A user in the chat triggered another user's proximity alert while sharing
   * Live Location.
   */
  proximity_alert_triggered?: ProximityAlertTriggered;

  /**
   * Optional. Service message: user boosted the chat
   */
  boost_added?: ChatBoostAdded;

  /**
   * Optional. Service message: chat background set
   */
  chat_background_set?: ChatBackground;

  /**
   * Optional. Service message: forum topic created
   */
  forum_topic_created?: ForumTopicCreated;

  /**
   * Optional. Service message: forum topic edited
   */
  forum_topic_edited?: ForumTopicEdited;

  /**
   * Optional. Service message: forum topic closed
   */
  forum_topic_closed?: ForumTopicClosed;

  /**
   * Optional. Service message: forum topic reopened
   */
  forum_topic_reopened?: ForumTopicReopened;

  /**
   * Optional. Service message: the 'General' forum topic hidden
   */
  general_forum_topic_hidden?: GeneralForumTopicHidden;

  /**
   * Optional. Service message: the 'General' forum topic unhidden
   */
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;

  /**
   * Optional. Service message: a scheduled giveaway was created
   */
  giveaway_created?: GiveawayCreated;

  /**
   * Optional. The message is a scheduled giveaway message
   */
  giveaway?: Giveaway;

  /**
   * Optional. A giveaway with public winners was completed
   */
  giveaway_winners?: GiveawayWinners;

  /**
   * Optional. Service message: a giveaway without public winners was completed
   */
  giveaway_completed?: GiveawayCompleted;

  /**
   * Optional. Service message: video chat scheduled
   */
  video_chat_scheduled?: VideoChatScheduled;

  /**
   * Optional. Service message: video chat started
   */
  video_chat_started?: VideoChatStarted;

  /**
   * Optional. Service message: video chat ended
   */
  video_chat_ended?: VideoChatEnded;

  /**
   * Optional. Service message: new participants invited to a video chat
   */
  video_chat_participants_invited?: VideoChatParticipantsInvited;

  /**
   * Optional. Service message: data sent by a Web App
   */
  web_app_data?: WebAppData;

  /**
   * Optional. Inline keyboard attached to the message. `login_url` buttons are represented as ordinary `url` buttons.
   */
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
  'refunded_payment',
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

/**
 * All message types such as `message:text`, `message:audio`, `message:new_chat_members` etc.
 */
export type MessageTypes = {
  [P in (typeof messageTypes)[number] as `message:${P}`]: Message & Required<Pick<Message, P>>;
};
