import {
  RichTextBold,
  RichTextItalic,
  RichTextUnderline,
  RichTextStrikethrough,
  RichTextSpoiler,
  RichTextDateTime,
  RichTextTextMention,
  RichTextSubscript,
  RichTextSuperscript,
  RichTextMarked,
  RichTextCode,
  RichTextCustomEmoji,
  RichTextMathematicalExpression,
  RichTextUrl,
  RichTextEmailAddress,
  RichTextPhoneNumber,
  RichTextBankCardNumber,
  RichTextMention,
  RichTextHashtag,
  RichTextCashtag,
  RichTextBotCommand,
  RichTextAnchor,
  RichTextAnchorLink,
  RichTextReference,
  RichTextReferenceLink,
} from './';

/**
 * ## RichText
 * This object represents a rich formatted text. Currently, it can be either a String for plain text, an Array of
 * RichText, or any of the following types:
 * - RichTextBold
 * - RichTextItalic
 * - RichTextUnderline
 * - RichTextStrikethrough
 * - RichTextSpoiler
 * - RichTextDateTime
 * - RichTextTextMention
 * - RichTextSubscript
 * - RichTextSuperscript
 * - RichTextMarked
 * - RichTextCode
 * - RichTextCustomEmoji
 * - RichTextMathematicalExpression
 * - RichTextUrl
 * - RichTextEmailAddress
 * - RichTextPhoneNumber
 * - RichTextBankCardNumber
 * - RichTextMention
 * - RichTextHashtag
 * - RichTextCashtag
 * - RichTextBotCommand
 * - RichTextAnchor
 * - RichTextAnchorLink
 * - RichTextReference
 * - RichTextReferenceLink
 * @see https://core.telegram.org/bots/api#richtext
 */
export type RichText =
  | string
  | RichText[]
  | RichTextBold
  | RichTextItalic
  | RichTextUnderline
  | RichTextStrikethrough
  | RichTextSpoiler
  | RichTextDateTime
  | RichTextTextMention
  | RichTextSubscript
  | RichTextSuperscript
  | RichTextMarked
  | RichTextCode
  | RichTextCustomEmoji
  | RichTextMathematicalExpression
  | RichTextUrl
  | RichTextEmailAddress
  | RichTextPhoneNumber
  | RichTextBankCardNumber
  | RichTextMention
  | RichTextHashtag
  | RichTextCashtag
  | RichTextBotCommand
  | RichTextAnchor
  | RichTextAnchorLink
  | RichTextReference
  | RichTextReferenceLink;
