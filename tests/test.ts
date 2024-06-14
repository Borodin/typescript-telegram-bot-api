import 'dotenv/config';
import { createReadStream } from 'fs';
import { TelegramBot } from '../src';

const TOKEN = process.env.TEST_TELEGRAM_TOKEN as string;
const USERID = parseInt(process.env.TEST_USER_ID as string);

const bot = new TelegramBot({ botToken: TOKEN });

describe('TelegramBot', () => {
  it('should be defined', () => {
    expect(TelegramBot).toBeDefined();
  });

  it('should throw error when botToken is empty', async () => {
    await expect(
      new TelegramBot({
        botToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
      }).getMe(),
    ).rejects.toThrow('401 Unauthorized');
  });

  it('should throw error when botToken is invalid', async () => {
    await expect(
      new TelegramBot({
        botToken: '000:invalid_token',
      }).getMe(),
    ).rejects.toThrow('401 Unauthorized: invalid token specified');
  });
});

describe('.getMe()', () => {
  it('should be defined', () => {
    expect(bot.getMe).toBeDefined();
  });

  it('should return bot info', async () => {
    await expect(bot.getMe()).resolves.toHaveProperty('is_bot', true);
  });
});

describe('.sendMessage()', () => {
  it('should be defined', () => {
    expect(bot.sendMessage).toBeDefined();
  });

  it('should send message', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: 'sendMessage',
        disable_notification: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: 'button', callback_data: 'callback_data' }],
          ],
        },
      }),
    ).resolves.toHaveProperty('text', 'sendMessage');
  });

  it('should fail when chat_id is 1', async () => {
    await expect(
      bot.sendMessage({
        chat_id: 1,
        text: 'sendMessage',
      }),
    ).rejects.toThrow('400 Bad Request: chat not found');
  });

  it('should fail when message text is empty', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: '',
      }),
    ).rejects.toThrow('400 Bad Request: message text is empty');
  });

  it('should fail when message text is too long', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: '0'.repeat(4096 + 1),
      }),
    ).rejects.toThrow('400 Bad Request: message is too long');
  });
});

describe('.forwardMessage()', () => {
  it('should be defined', () => {
    expect(bot.forwardMessage).toBeDefined();
  });

  it('should forward message', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'Original message',
    });

    const forwardedMessage = await bot.forwardMessage({
      chat_id: USERID,
      from_chat_id: USERID,
      message_id: message.message_id,
    });

    expect(forwardedMessage).toHaveProperty('text', 'Original message');
    expect(forwardedMessage).toHaveProperty('chat.id', USERID);
    expect(forwardedMessage).toHaveProperty('from.id', message.from?.id);
    expect(forwardedMessage).toHaveProperty('message_id');
    expect(forwardedMessage.message_id).toBeGreaterThan(0);
  });
});

describe('.forwardMessages()', () => {
  it('should be defined', () => {
    expect(bot.forwardMessages).toBeDefined();
  });

  it('should forward messages', async () => {
    const [firstMessage, lastMessage] = [
      await bot.sendMessage({
        chat_id: USERID,
        text: 'first message',
      }),
      await bot.sendMessage({
        chat_id: USERID,
        text: 'last message',
      }),
    ];

    const forwardedMessages = await bot.forwardMessages({
      chat_id: USERID,
      from_chat_id: USERID,
      message_ids: [firstMessage.message_id, lastMessage.message_id],
    });

    expect(forwardedMessages).toHaveLength(2);
    expect(forwardedMessages[0]).toHaveProperty('message_id');
    expect(forwardedMessages[1]).toHaveProperty('message_id');
  });
});

describe('.copyMessage()', () => {
  it('should be defined', () => {
    expect(bot.copyMessage).toBeDefined();
  });

  it('should copy message', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'message to copy',
    });

    await expect(
      bot.copyMessage({
        chat_id: USERID,
        from_chat_id: USERID,
        message_id: message.message_id,
        protect_content: true,
      }),
    ).resolves.toHaveProperty('message_id');
  });
});

describe('.copyMessages()', () => {
  it('should be defined', () => {
    expect(bot.copyMessages).toBeDefined();
  });

  it('should copy messages', async () => {
    const [firstMessage, lastMessage] = [
      await bot.sendMessage({
        chat_id: USERID,
        text: 'first message',
      }),
      await bot.sendMessage({
        chat_id: USERID,
        text: 'last message',
      }),
    ];

    const copiedMessages = await bot.copyMessages({
      chat_id: USERID,
      from_chat_id: USERID,
      message_ids: [firstMessage.message_id, lastMessage.message_id],
      protect_content: true,
    });

    expect(copiedMessages).toHaveLength(2);
    expect(copiedMessages[0]).toHaveProperty('message_id');
    expect(copiedMessages[1]).toHaveProperty('message_id');
  });
});

describe('.sendPhoto()', () => {
  it('should be defined', () => {
    expect(bot.sendPhoto).toBeDefined();
  });

  it('should send photo from url', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: 'https://unsplash.it/640/480',
        caption: 'Photo from url',
      }),
    ).resolves.toHaveProperty('photo');
  });

  it('should send photo from file', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: createReadStream('tests/data/photo.jpg'),
        caption: 'Photo from file (ReadStream)',
      }),
    ).resolves.toHaveProperty('photo');
  });

  it('should send photo from file_id', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo:
          'AgACAgIAAxkDAAIF62Zq431wDZn6ddGJauzr35UDnc0eAAKf2zEbWP1YSw7ya9P-Yhl_AQADAgADcwADNQQ',
        caption: 'Photo from file_id',
      }),
    ).resolves.toHaveProperty('photo');
  });
});

describe('.sendAudio()', () => {
  it('should be defined', () => {
    expect(bot.sendAudio).toBeDefined();
  });

  it('should send audio from url', async () => {
    await expect(
      bot.sendAudio({
        chat_id: USERID,
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        caption: 'Audio from url',
      }),
    ).resolves.toHaveProperty('audio');
  });

  it('should send audio from file', async () => {
    await expect(
      bot.sendAudio({
        chat_id: USERID,
        audio: createReadStream('tests/data/audio.mp3'),
        thumbnail: createReadStream('tests/data/cover.jpg'),
        caption: 'Audio from file (ReadStream)',
        title: 'Title',
        performer: 'Performer',
      }),
    ).resolves.toHaveProperty('audio');
  });

  it('should send audio from file_id', async () => {
    await expect(
      bot.sendAudio({
        chat_id: USERID,
        audio:
          'CQACAgIAAxkDAAIGEWZq5cLttqeK39P50aO9SKAJHLXrAAKeSwACWP1YS2NlPag2z37fNQQ',
        caption: 'Audio from file_id',
      }),
    ).resolves.toHaveProperty('audio');
  });
});
