import { User } from './';

type MessageEntityType =
  | 'mention'
  | 'hashtag'
  | 'cashtag'
  | 'bot_command'
  | 'url'
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
  | 'pre'
  | 'text_link'
  | 'text_mention'
  | 'custom_emoji';

export type MessageEntity = {
  offset: number;
  length: number;
} & (
  | {
      type: Exclude<
        MessageEntityType,
        'url' | 'text_mention' | 'pre' | 'custom_emoji'
      >;
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
