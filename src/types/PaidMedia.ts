import { PaidMediaPreview } from './PaidMediaPreview';
import { PaidMediaPhoto } from './PaidMediaPhoto';
import { PaidMediaVideo } from './PaidMediaVideo';

/**
 * ## PaidMedia
 * This object describes paid media. Currently, it can be one of
 * - PaidMediaPreview
 * - PaidMediaPhoto
 * - PaidMediaVideo
 * @see https://core.telegram.org/bots/api#paidmedia
 */
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;
