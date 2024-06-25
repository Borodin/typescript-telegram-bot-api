import 'dotenv/config';
import { Message, Update } from '../src/types/';
import { TelegramBot } from '../src';
import nock from 'nock';

describe('Polling', () => {
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

    bot.startPolling();

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
