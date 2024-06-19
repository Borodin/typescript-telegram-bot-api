import { TelegramBot } from './index';
import {
  UpdateType,
  EventTypes,
  Message,
  messageTypes,
  MessageTypes,
  Update,
} from './types/';

export class Polling {
  private readonly abortController = new AbortController();
  private offset = 0;

  constructor(
    private readonly telegramBot: TelegramBot,
    private readonly allowedUpdates: UpdateType[],
  ) {}

  private emit(update: Update) {
    Object.keys(update).forEach((key) => {
      if (key !== 'update_id' && key !== 'poll') {
        const eventType = key as Exclude<keyof EventTypes, 'poll'>;
        const eventData = update[eventType] as EventTypes[typeof eventType];
        if (eventData !== undefined) {
          this.telegramBot.emit(eventType, eventData);
          if (eventType === 'message') {
            const message = eventData as Message;
            for (const messageType of Object.keys(messageTypes)) {
              if (messageType in message)
                this.telegramBot.emit(
                  messageType as keyof MessageTypes,
                  message,
                );
            }
          }
        }
      }
    });
  }

  private async poll() {
    while (!this.abortController.signal.aborted) {
      try {
        const updates = await this.telegramBot.getUpdates(
          {
            offset: this.offset,
            allowed_updates: this.allowedUpdates,
            timeout: 50,
          },
          this.abortController,
        );
        for (const update of updates) {
          this.emit(update);
          this.offset = update.update_id + 1;
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          break;
        }
        throw error;
      }
    }
  }

  start() {
    this.poll().catch();
  }

  stop() {
    this.abortController.abort();
  }
}
