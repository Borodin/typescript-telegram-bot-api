import {
  InputRichBlockParagraph,
  InputRichBlockSectionHeading,
  InputRichBlockPreformatted,
  InputRichBlockFooter,
  InputRichBlockDivider,
  InputRichBlockMathematicalExpression,
  InputRichBlockAnchor,
  InputRichBlockList,
  InputRichBlockBlockQuotation,
  InputRichBlockPullQuotation,
  InputRichBlockCollage,
  InputRichBlockSlideshow,
  InputRichBlockTable,
  InputRichBlockDetails,
  InputRichBlockMap,
  InputRichBlockAnimation,
  InputRichBlockAudio,
  InputRichBlockPhoto,
  InputRichBlockVideo,
  InputRichBlockVoiceNote,
  InputRichBlockThinking,
} from './';

/**
 * ## InputRichBlock
 * This object represents a block in a rich formatted message to be sent. Currently, it can be any of the following
 * types:
 * - InputRichBlockParagraph
 * - InputRichBlockSectionHeading
 * - InputRichBlockPreformatted
 * - InputRichBlockFooter
 * - InputRichBlockDivider
 * - InputRichBlockMathematicalExpression
 * - InputRichBlockAnchor
 * - InputRichBlockList
 * - InputRichBlockBlockQuotation
 * - InputRichBlockPullQuotation
 * - InputRichBlockCollage
 * - InputRichBlockSlideshow
 * - InputRichBlockTable
 * - InputRichBlockDetails
 * - InputRichBlockMap
 * - InputRichBlockAnimation
 * - InputRichBlockAudio
 * - InputRichBlockPhoto
 * - InputRichBlockVideo
 * - InputRichBlockVoiceNote
 * - InputRichBlockThinking
 * @see https://core.telegram.org/bots/api#inputrichblock
 */
export type InputRichBlock =
  | InputRichBlockParagraph
  | InputRichBlockSectionHeading
  | InputRichBlockPreformatted
  | InputRichBlockFooter
  | InputRichBlockDivider
  | InputRichBlockMathematicalExpression
  | InputRichBlockAnchor
  | InputRichBlockList
  | InputRichBlockBlockQuotation
  | InputRichBlockPullQuotation
  | InputRichBlockCollage
  | InputRichBlockSlideshow
  | InputRichBlockTable
  | InputRichBlockDetails
  | InputRichBlockMap
  | InputRichBlockAnimation
  | InputRichBlockAudio
  | InputRichBlockPhoto
  | InputRichBlockVideo
  | InputRichBlockVoiceNote
  | InputRichBlockThinking;
