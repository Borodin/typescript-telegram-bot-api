import { User } from './';

/**
 * ## MessageEntity
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * @see https://core.telegram.org/bots/api#messageentity
 */
export type MessageEntity = {

  /**
   * Offset in UTF-16 code units to the start of the entity
   */
  offset: number;

  /**
   * Length of the entity in UTF-16 code units
   */
  length: number;
} & (
  | {

      /**
       * Type of the entity. Currently, can be
       * “mention” (@username),
       * “hashtag” (#hashtag),
       * “cashtag” ($USD),
       * “bot_command” (/start@jobs_bot),
       * “url” (https://telegram.org),
       * “email” (do-not-reply@telegram.org),
       * “phone_number” (+1-212-555-0123),
       * “bold” (bold text),
       * “italic” (italic text),
       * “underline” (underlined text),
       * “strikethrough” (strikethrough text),
       * “spoiler” (spoiler message),
       * “blockquote” (block quotation),
       * “expandable_blockquote” (collapsed-by-default block quotation),
       * “code” (monowidth string),
       * “pre” (monowidth block),
       * “text_link” (for clickable text URLs),
       * “text_mention” (for users without usernames),
       * “custom_emoji” (for inline custom emoji stickers)
       */
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

      /**
       * Type of the entity.
       * “url” (https://telegram.org),
       */
      type: 'url';

      /**
       * Optional. For “text_link” only, URL that will be opened after user taps on the text
       */
      url: string;
    }
  | {

      /**
       * Type of the entity.
       * “text_mention” (for users without usernames),
       */
      type: 'text_mention';

      /**
       * Optional. For “text_mention” only, the mentioned user
       */
      user: User;
    }
  | {

      /**
       * Type of the entity.
       * “pre” (monowidth block),
       */
      type: 'pre';

      /**
       * Optional. For “pre” only, the programming language of the entity text
       */
      language: string;
    }
  | {

      /**
       * Type of the entity.
       * “custom_emoji” (for inline custom emoji stickers)
       */
      type: 'custom_emoji';

      /**
       * Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get
       * full
       * information about the sticker
       */
      custom_emoji_id: string;
    }
);
