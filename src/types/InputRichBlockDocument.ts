import { InputMediaDocument, RichBlockCaption } from './';

/**
 * ## InputRichBlockDocument
 * A block with a general file, corresponding to the custom HTML tag <tg-document>.
 * @see https://core.telegram.org/bots/api#inputrichblockdocument
 */
export type InputRichBlockDocument = {
  /**
   * Type of the block, always "document"
   */
  type: 'document';

  /**
   * The document. Caption is ignored.
   */
  document: InputMediaDocument;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
