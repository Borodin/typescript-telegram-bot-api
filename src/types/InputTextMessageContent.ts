import { MessageEntity, LinkPreviewOptions, ParseMode } from './';

export type InputTextMessageContent = {
  message_text: string;
  parse_mode?: ParseMode;
  entities?: MessageEntity[];
  link_preview_options?: LinkPreviewOptions;
};
