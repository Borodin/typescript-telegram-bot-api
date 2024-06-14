import { PhotoSize } from './';

export type VideoNote = {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumb?: PhotoSize;
  file_size?: number;
};
