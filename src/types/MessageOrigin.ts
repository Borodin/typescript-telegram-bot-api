import { MessageOriginUser, MessageOriginHiddenUser, MessageOriginChat, MessageOriginChannel } from './';

/**
 * ## MessageOrigin
 * This object describes the origin of a message. It can be one of
 * - MessageOriginUser
 * - MessageOriginHiddenUser
 * - MessageOriginChat
 * - MessageOriginChannel
 * @see https://core.telegram.org/bots/api#messageorigin
 */
export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel;
