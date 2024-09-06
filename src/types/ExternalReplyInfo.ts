import {
  Animation,
  Sticker,
  Location,
  Venue,
  Chat,
  LinkPreviewOptions,
  Audio,
  Document,
  PhotoSize,
  Game,
  Poll,
  Story,
  Giveaway,
  GiveawayWinners,
  MessageOrigin,
  Video,
  VideoNote,
  Voice,
  Contact,
  Dice,
  Invoice,
  PaidMediaInfo,
} from './';

/**
 * ## ExternalReplyInfo
 * This object contains information about a message that is being replied to, which may come from another chat or forum
 * topic.
 * @see https://core.telegram.org/bots/api#externalreplyinfo
 */
export type ExternalReplyInfo = {
  /**
   * Origin of the message replied to by the given message
   */
  origin: MessageOrigin;

  /**
   * Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
   */
  chat?: Chat;

  /**
   * Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup
   * or a channel.
   */
  message_id?: number;

  /**
   * Optional. Options used for link preview generation for the original message, if it is a text message
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * Optional. Message is an animation, information about the animation
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
   * Optional. Message is a scheduled giveaway, information about the giveaway
   */
  giveaway?: Giveaway;

  /**
   * Optional. A giveaway with public winners was completed
   */
  giveaway_winners?: GiveawayWinners;

  /**
   * Optional. Message is an invoice for a payment, information about the invoice. [More about payments](https://core.telegram.org/bots/api#payments)
   */
  invoice?: Invoice;

  /**
   * Optional. Message is a shared location, information about the location
   */
  location?: Location;

  /**
   * Optional. Message is a native poll, information about the poll
   */
  poll?: Poll;

  /**
   * Optional. Message is a venue, information about the venue
   */
  venue?: Venue;
};
