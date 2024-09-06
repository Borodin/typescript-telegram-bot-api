const emojis = [
  '👍',
  '👎',
  '❤',
  '🔥',
  '🥰',
  '👏',
  '😁',
  '🤔',
  '🤯',
  '😱',
  '🤬',
  '😢',
  '🎉',
  '🤩',
  '🤮',
  '💩',
  '🙏',
  '👌',
  '🕊',
  '🤡',
  '🥱',
  '🥴',
  '😍',
  '🐳',
  '❤‍🔥',
  '🌚',
  '🌭',
  '💯',
  '🤣',
  '⚡',
  '🍌',
  '🏆',
  '💔',
  '🤨',
  '😐',
  '🍓',
  '🍾',
  '💋',
  '🖕',
  '😈',
  '😴',
  '😭',
  '🤓',
  '👻',
  '👨‍💻',
  '👀',
  '🎃',
  '🙈',
  '😇',
  '😨',
  '🤝',
  '✍',
  '🤗',
  '🫡',
  '🎅',
  '🎄',
  '☃',
  '💅',
  '🤪',
  '🗿',
  '🆒',
  '💘',
  '🙉',
  '🦄',
  '😘',
  '💊',
  '🙊',
  '😎',
  '👾',
  '🤷‍♂',
  '🤷',
  '🤷‍♀',
  '😡',
] as const;

/**
 * ## ReactionTypeEmoji
 * The reaction is based on an emoji.
 * @see https://core.telegram.org/bots/api#reactiontypeemoji
 */
export type ReactionTypeEmoji = {
  /**
   * Type of the reaction, always “emoji”
   */
  type: 'emoji';

  /**
   * Reaction emoji. Currently, it can be one of "👍", "👎" ...
   */
  emoji: (typeof emojis)[number] | string;
};
