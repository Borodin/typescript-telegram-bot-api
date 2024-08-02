import { InputPaidMediaPhoto } from './InputPaidMediaPhoto';
import { InputPaidMediaVideo } from './InputPaidMediaVideo';

/**
 * ## InputPaidMedia
 * This object describes the paid media to be sent. Currently, it can be one of
 * - InputPaidMediaPhoto
 * - InputPaidMediaVideo
 * @see https://core.telegram.org/bots/api#inputpaidmedia
 */
export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;
