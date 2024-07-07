import { TelegramBot } from '../src';

const bot = new TelegramBot({
  botToken: 'TOKEN',
});

describe('Types', () => {
  it('should handle types', async () => {
    bot.on('message:text', (message) => {
      message.text.toUpperCase();
    });

    bot.on('message:audio', (message) => {
      message.audio.file_id.toUpperCase();
    });

    bot.on('message:refunded_payment', (message) => {
      message.refunded_payment.currency;
    });

    bot.on('message', (message) => {
      message.message_id.toFixed();
    });

    bot.on('poll', (poll) => {
      poll.id.toUpperCase();
    });
  });
});
