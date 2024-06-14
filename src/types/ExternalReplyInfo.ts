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
} from './';

export type ExternalReplyInfo = {
  origin: MessageOrigin;
  chat?: Chat;
  message_id?: number;
  link_preview_options?: LinkPreviewOptions;
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  photo?: PhotoSize[];
  sticker?: Sticker;
  story?: Story;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  has_media_spoiler?: boolean;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  giveaway?: Giveaway;
  giveaway_winners?: GiveawayWinners;
  invoice?: Invoice;
  location?: Location;
  poll?: Poll;
  venue?: Venue;
};
