import { Document, BackgroundFill } from './';

export type BackgroundTypePattern = {
  type: 'pattern';
  document: Document;
  fill: BackgroundFill;
  intensity: number;
  is_blurred: boolean;
  is_moving: boolean;
};
