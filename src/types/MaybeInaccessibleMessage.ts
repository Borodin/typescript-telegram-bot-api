import { Message, InaccessibleMessage } from './';

/**
 * ## MaybeInaccessibleMessage
 * This object describes a message that can be inaccessible to the bot. It can be one of
 * @see https://core.telegram.org/bots/api#maybeinaccessiblemessage
 * */
export type MaybeInaccessibleMessage = Message | InaccessibleMessage;
