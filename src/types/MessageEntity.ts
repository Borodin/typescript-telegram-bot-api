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
       * “hashtag” (#hashtag or #hashtag@chatusername),
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
       * “custom_emoji” (for inline custom emoji stickers),
       * “date_time” (for formatted date and time)
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
        | 'url';
    }
  | {
      /**
       * Type of the entity.
       * “text_link” (for clickable text URLs),
       */
      type: 'text_link';

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
  | {
      /**
       * Type of the entity.
       * "date_time" (for formatted date and time)
       */
      type: 'date_time';

      /**
       * Optional. For "date_time" only, the Unix time associated with the entity
       */
      unix_time?: number;

      /**
       * Optional. For "date_time" only, the string that defines the formatting of the date and time.
       * See date-time entity formatting for more details.
       */
      date_time_format?: string;
    }
);
