import {
  RichBlockParagraph,
  RichBlockSectionHeading,
  RichBlockPreformatted,
  RichBlockFooter,
  RichBlockDivider,
  RichBlockMathematicalExpression,
  RichBlockAnchor,
  RichBlockList,
  RichBlockBlockQuotation,
  RichBlockExpandableBlockQuotation,
  RichBlockPullQuotation,
  RichBlockCollage,
  RichBlockSlideshow,
  RichBlockTable,
  RichBlockDetails,
  RichBlockMap,
  RichBlockButtons,
  RichBlockAnimation,
  RichBlockAudio,
  RichBlockDocument,
  RichBlockPhoto,
  RichBlockVideo,
  RichBlockVoiceNote,
  RichBlockThinking,
} from './';

/**
 * ## RichBlock
 * This object represents a block in a rich formatted message. Currently, it can be any of the following types:
 * - RichBlockParagraph
 * - RichBlockSectionHeading
 * - RichBlockPreformatted
 * - RichBlockFooter
 * - RichBlockDivider
 * - RichBlockMathematicalExpression
 * - RichBlockAnchor
 * - RichBlockList
 * - RichBlockBlockQuotation
 * - RichBlockExpandableBlockQuotation
 * - RichBlockPullQuotation
 * - RichBlockCollage
 * - RichBlockSlideshow
 * - RichBlockTable
 * - RichBlockDetails
 * - RichBlockMap
 * - RichBlockButtons
 * - RichBlockAnimation
 * - RichBlockAudio
 * - RichBlockDocument
 * - RichBlockPhoto
 * - RichBlockVideo
 * - RichBlockVoiceNote
 * - RichBlockThinking
 * @see https://core.telegram.org/bots/api#richblock
 */
export type RichBlock =
  | RichBlockParagraph
  | RichBlockSectionHeading
  | RichBlockPreformatted
  | RichBlockFooter
  | RichBlockDivider
  | RichBlockMathematicalExpression
  | RichBlockAnchor
  | RichBlockList
  | RichBlockBlockQuotation
  | RichBlockExpandableBlockQuotation
  | RichBlockPullQuotation
  | RichBlockCollage
  | RichBlockSlideshow
  | RichBlockTable
  | RichBlockDetails
  | RichBlockMap
  | RichBlockButtons
  | RichBlockAnimation
  | RichBlockAudio
  | RichBlockDocument
  | RichBlockPhoto
  | RichBlockVideo
  | RichBlockVoiceNote
  | RichBlockThinking;
