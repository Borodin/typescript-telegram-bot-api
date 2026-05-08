import { PaidMediaPreview } from './PaidMediaPreview';
import { PaidMediaLivePhoto } from './PaidMediaLivePhoto';
import { PaidMediaPhoto } from './PaidMediaPhoto';
import { PaidMediaVideo } from './PaidMediaVideo';

/**
 * ## PaidMedia
 * This object describes paid media. Currently, it can be one of
 * - PaidMediaLivePhoto
 * - PaidMediaPhoto
 * - PaidMediaPreview
 * - PaidMediaVideo
 * @see https://core.telegram.org/bots/api#paidmedia
 */
export type PaidMedia = PaidMediaLivePhoto | PaidMediaPhoto | PaidMediaPreview | PaidMediaVideo;
