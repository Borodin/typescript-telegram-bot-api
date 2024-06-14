import { Document } from './';

export type BackgroundTypeWallpaper = {
  type: 'wallpaper';
  document: Document;
  dark_theme_dimming: number;
  is_blurred: boolean;
  is_moving: boolean;
};
