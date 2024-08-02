import 'dotenv/config';
import axios from 'axios';
import { Message, Update } from '../src/types/';
import { TelegramBot } from '../src';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const TOKEN = process.env.TEST_TELEGRAM_TOKEN as string;

describe('Polling ', () => {
  beforeEach(() => {
    mock.reset();
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

    mock.onPost(`${bot.baseURL}/bot${botToken}/getUpdates`).reply(200, JSON.stringify({ ok: true, result }));
    await bot.startPolling();

    await expect(
      new Promise<Message>((resolve) => {
        bot.on('message:text', (msg) => {
          bot.stopPolling();
          resolve(msg);
        });
      }),
    ).resolves.toHaveProperty('text', '/start');
  });
});

describe('Parallel Polling', () => {
  beforeEach(() => {
    mock.restore();
  });

  const bot1 = new TelegramBot({ botToken: TOKEN, pollingTimeout: 1 });
  const bot2 = new TelegramBot({ botToken: TOKEN, pollingTimeout: 1 });
  let warnSpy: jest.SpyInstance;

  beforeAll(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation();
  });

  it('should handle parallel polling without errors', async () => {
    await expect(bot1.startPolling()).resolves.not.toThrow();
    await expect(bot2.startPolling()).resolves.not.toThrow();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(warnSpy).toHaveBeenCalledWith(
      '409 Conflict: terminated by other getUpdates request; make sure that only one bot instance is running',
    );
  });

  afterAll(async () => {
    await bot1.stopPolling();
    await bot2.stopPolling();
    warnSpy.mockRestore();
  });
});
