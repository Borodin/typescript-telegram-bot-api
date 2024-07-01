import 'dotenv/config';
import { Message, Update } from '../src/types/';
import { TelegramBot } from '../src';
import nock from 'nock';

const TOKEN = process.env.TEST_TELEGRAM_TOKEN as string;

describe('Polling', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  afterAll(() => {
    nock.restore();
  });

  it('should handle delayed response in private chat', async () => {
    const botToken = 'token';
    const bot = new TelegramBot({ botToken });
    const result: Update[] = [
      {
        update_id: 1,
        message: {
          message_id: 1,
          chat: { id: 1, type: 'private' },
          text: '/start',
          date: 0,
        },
      },
    ];

    nock(bot.baseURL)
      .post(`/bot${botToken}/getUpdates`)
      .delay(1000)
      .reply(200, { ok: true, result });

    await bot.startPolling();

    await expect(
      new Promise<Message>((resolve) => {
        bot.on('message:text', (msg) => {
          bot.stopPolling();
          resolve(msg);
        });
      }),
    ).resolves.toHaveProperty('text', '/start');
    expect(nock.isDone()).toBeTruthy();
  });
});

describe('Parallel Polling', () => {
  const bot1 = new TelegramBot({ botToken: TOKEN, pollingTimeout: 1 });
  const bot2 = new TelegramBot({ botToken: TOKEN, pollingTimeout: 1 });

  it('should handle parallel polling without errors', async () => {
    await expect(bot1.startPolling()).resolves.not.toThrow();
    await expect(bot2.startPolling()).resolves.not.toThrow();
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  afterAll(async () => {
    await bot1.stopPolling();
    await bot2.stopPolling();
  });
});
