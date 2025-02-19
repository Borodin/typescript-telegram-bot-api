import { MethodParameters, MethodReturn, TelegramBot } from '../src';

const bot = new TelegramBot({
  botToken: 'TOKEN',
});

describe('Types', () => {
  test('should handle types', async () => {
    bot.on('message:text', (message) => {
      message.text.toUpperCase();
    });

    bot.on('message:audio', (message) => {
      message.audio.file_id.toUpperCase();

      // message.video.file_id.toUpperCase(); // Error 'message.video' is possibly 'undefined'.
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

    const title: MethodParameters<'sendInvoice'>['title'] = 'title';
    title.toUpperCase();

    const messageIds: MethodReturn<'copyMessage'> = {
      message_id: 1,
    };
    messageIds.message_id.toFixed();
  });
});
