import { TelegramBot } from './index';
import {
  EventTypes,
  Message,
  messageTypes,
  MessageTypes,
  Update,
} from './types/';
import { TelegramError } from './errors';

export class Polling {
  private readonly abortController = new AbortController();
  private offset = 0;

  constructor(private readonly telegramBot: TelegramBot) {}

  private emitMessage(message: Message) {
    messageTypes.forEach((key) => {
      if (key in message) {
        this.telegramBot.emit(
          `message:${key}` as keyof MessageTypes,
          message as Message & Required<Pick<Message, typeof key>>,
        );
      }
    });
  }

  private emitUpdate(update: Update) {
    Object.keys(update).forEach((key) => {
      if (key !== 'update_id') {
        const eventType = key as keyof EventTypes;
        const eventData = update[eventType] as EventTypes[typeof eventType];
        if (eventData !== undefined) {
          this.telegramBot.emit(eventType, eventData);
          if (eventType === 'message') {
            this.emitMessage(eventData as Message);
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
            allowed_updates: this.telegramBot.allowedUpdates,
            timeout: this.telegramBot.pollingTimeout,
          },
          this.abortController,
        );
        for (const update of updates) {
          this.emitUpdate(update);
          this.offset = update.update_id + 1;
        }
      } catch (error) {
        if (error instanceof TelegramError) {
          if (error.response.error_code === 409) {
            /* eslint-disable no-console */
            console.warn(error.message);
            /* eslint-enable no-console */
          } else {
            throw error;
          }
        }
      }
    }
  }

  async start() {
    return this.poll();
  }

  async stop() {
    this.abortController.abort();
  }
}
