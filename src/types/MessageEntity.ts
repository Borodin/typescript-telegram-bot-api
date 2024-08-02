import { User } from './';

/**
 * ## MessageEntity
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * @see https://core.telegram.org/bots/api#messageentity
 */
export type MessageEntity = {
  offset: number;
  length: number;
} & (
  | {
      type:
        | 'mention'
        | 'hashtag'
        | 'cashtag'
        | 'bot_command'
        | 'email'
        | 'phone_number'
        | 'bold'
        | 'italic'
        | 'underline'
        | 'strikethrough'
        | 'spoiler'
        | 'blockquote'
        | 'expandable_blockquote'
        | 'code'
        | 'text_link';
    }
  | {
      type: 'url';
      url: string;
    }
  | {
      type: 'text_mention';
      user: User;
    }
  | {
      type: 'pre';
      language: string;
    }
  | {
      type: 'custom_emoji';
      custom_emoji_id: string;
    }
);
