import {
  MessageOriginUser,
  MessageOriginHiddenUser,
  MessageOriginChat,
  MessageOriginChannel,
} from './';

export type MessageOrigin =
  | MessageOriginUser
  | MessageOriginHiddenUser
  | MessageOriginChat
  | MessageOriginChannel;
