import { Document, RichBlockCaption } from './';

/**
 * ## RichBlockDocument
 * A block with a general file, corresponding to the custom HTML tag <tg-document>.
 * @see https://core.telegram.org/bots/api#richblockdocument
 */
export type RichBlockDocument = {
  /**
   * Type of the block, always "document"
   */
  type: 'document';

  /**
   * The document
   */
  document: Document;

  /**
   * Optional. Caption of the block
   */
  caption?: RichBlockCaption;
};
