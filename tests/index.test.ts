import 'dotenv/config';
import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
import { FileOptions, TelegramBot, ForumTopic, File, User, StickerSet, Update } from '../src';
import { TelegramError } from '../src/errors';

const TOKEN = process.env.TEST_TELEGRAM_TOKEN as string;
const USERID = parseInt(process.env.TEST_USER_ID as string);
const TEST_GROUP_ID = parseInt(process.env.TEST_GROUP_ID as string);
const TEST_CHANNEL_ID = parseInt(process.env.TEST_CHANNEL_ID as string);
const TEST_GROUP_MEMBER_ID = parseInt(process.env.TEST_GROUP_MEMBER_ID as string);

const bot = new TelegramBot({
  botToken: TOKEN,
  autoRetry: true,
  autoRetryLimit: 120,
});

describe('TelegramBot', () => {
  test('should throw error when botToken is empty', async () => {
    await expect(
      new TelegramBot({
        botToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
      }).getMe(),
    ).rejects.toThrow('401 Unauthorized');
  });

  test('should throw error when botToken is invalid', async () => {
    await expect(
      new TelegramBot({
        botToken: '000:invalid_token',
      }).getMe(),
    ).rejects.toThrow('401 Unauthorized: invalid token specified');
  });

  test('should throw "Invalid response" error with a valid baseURL', async () => {
    await expect(
      new TelegramBot({
        botToken: 'TOKEN',
        baseURL: 'https://example.com',
      }).getMe(),
    ).rejects.toThrow('Invalid response');
  });

  test('should throw "getaddrinfo ENOTFOUND" error with an invalid baseURL', async () => {
    await expect(
      new TelegramBot({
        botToken: 'TOKEN',
        baseURL: 'https://INVALID_URL',
      }).getMe(),
    ).rejects.toThrow(/getaddrinfo (ENOTFOUND|EAI_AGAIN) invalid_url/);
  });

  test('should throw "401 Unauthorized" error with a valid botToken', async () => {
    await expect(
      new TelegramBot({
        botToken: TOKEN,
        testEnvironment: true,
      }).getMe(),
    ).rejects.toThrow('401 Unauthorized');
  });
});

describe('.processUpdate()', () => {
  const update: Update = {
    update_id: 1,
    message: {
      message_id: 1,
      chat: { id: 1, type: 'private' },
      text: '/start',
      date: 0,
    },
  };

  test('should emit message event', () => {
    const spy = jest.spyOn(bot, 'emit');
    bot.processUpdate(update);
    expect(spy).toHaveBeenCalledWith('message', update.message);
  });

  test('should emit message text event', () => {
    const spy = jest.spyOn(bot, 'emit');
    bot.processUpdate(update);
    expect(spy).toHaveBeenCalledWith('message:text', update.message);
  });
});

describe('.startPolling()', () => {
  test('should start polling', async () => {
    expect(() => bot.startPolling()).not.toThrow();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await bot.stopPolling();
  });
});

describe('.stopPolling()', () => {
  beforeAll(() => {
    bot.startPolling();
  });

  test('should stop polling', () => {
    expect(() => bot.stopPolling()).not.toThrow();
  });
});

describe('.setWebhook()', () => {
  test('should set webhook', async () => {
    await expect(
      bot.setWebhook({
        url: 'https://example.com',
      }),
    ).resolves.toBe(true);
  });

  afterAll(async () => {
    await bot.deleteWebhook();
  });
});

describe('.deleteWebhook()', () => {
  test('should delete webhook', async () => {
    await expect(bot.deleteWebhook()).resolves.toBe(true);
  });
});

describe('.getWebhookInfo()', () => {
  test('should get webhook info', async () => {
    await bot.setWebhook({
      url: 'https://example.com',
    });
    await expect(bot.getWebhookInfo()).resolves.toHaveProperty('url', 'https://example.com');
  });

  test('should return empty url when webhook is not set', async () => {
    await expect(bot.getWebhookInfo()).resolves.toHaveProperty('url', '');
  });

  afterEach(async () => {
    await bot.deleteWebhook();
  });
});

describe('.isTelegramError()', () => {
  test('should return true for Telegram-related errors', () => {
    const telegramError = new TelegramError({
      ok: false,
      description: 'Conflict: terminated by other getUpdates request; make sure that only one bot instance is running',
      error_code: 409,
    });
    expect(TelegramBot.isTelegramError(telegramError)).toBe(true);
  });

  test('should return false for non-Telegram-related errors', () => {
    const nonTelegramError = new Error('Database connection failed');
    expect(TelegramBot.isTelegramError(nonTelegramError)).toBe(false);
  });
});

describe('.getMe()', () => {
  test('should return bot info', async () => {
    await expect(bot.getMe()).resolves.toHaveProperty('is_bot', true);
  });
});

describe('.logOut()', () => {
  test('should log out the bot', async () => {
    await expect(
      new TelegramBot({
        botToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
      }).logOut(),
    ).rejects.toThrow('401 Unauthorized');
  });
});

describe('.close()', () => {
  test('should close the bot', async () => {
    await expect(
      new TelegramBot({
        botToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
      }).close(),
    ).rejects.toThrow('401 Unauthorized');
  });
});

describe('.sendMessage()', () => {
  test('should send message', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: 'sendMessage',
        disable_notification: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: 'button', callback_data: 'callback_data' }],
            [{ text: 'copy 123', copy_text: { text: '123' } }],
          ],
        },
      }),
    ).resolves.toHaveProperty('text', 'sendMessage');
  });

  test('should send message reply', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'Original message',
    });

    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: 'Reply message',
        reply_parameters: {
          message_id: message.message_id,
        },
      }),
    ).resolves.toHaveProperty('text', 'Reply message');
  });

  test('should fail when chat_id is 1', async () => {
    await expect(
      bot.sendMessage({
        chat_id: 1,
        text: 'sendMessage',
      }),
    ).rejects.toThrow('400 Bad Request: chat not found');
  });

  test('should fail when message text is empty', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: '',
      }),
    ).rejects.toThrow('400 Bad Request: message text is empty');
  });

  test('should fail when message text is too long', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: '0'.repeat(4096 + 1),
      }),
    ).rejects.toThrow('400 Bad Request: message is too long');
  });

  test('should fail when allow_paid_broadcast is true and not balance is insufficient', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: 'paid message text',
        allow_paid_broadcast: true,
      }),
    ).rejects.toThrow('400 Bad Request: FLOODSKIP_NOT_ALLOWED');
  });

  test('should send message with link preview disabled', async () => {
    await expect(
      bot.sendMessage({
        chat_id: USERID,
        text: 'text https://telegram.org/ text',
        link_preview_options: {
          is_disabled: true,
        },
      }),
    ).resolves.toHaveProperty('link_preview_options', expect.objectContaining({ is_disabled: true }));
  });
});

describe('.forwardMessage()', () => {
  test('should forward message', async () => {
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
  test('should forward messages', async () => {
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
  test('should copy message', async () => {
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
  test('should copy messages', async () => {
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
  test('should send photo from url', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: 'https://unsplash.it/640/480',
        caption: 'Photo from url',
      }),
    ).resolves.toHaveProperty('photo');
  });

  test('should send photo from stream', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: createReadStream('tests/data/photo.jpg'),
        caption: 'Photo from stream',
      }),
    ).resolves.toHaveProperty('photo');
  });

  test('should send photo from buffer', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: await readFile('tests/data/photo.jpg'),
        caption: 'Photo from buffer',
      }),
    ).resolves.toHaveProperty('photo');
  });

  test('should send photo from file_id', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: 'AgACAgIAAxkDAAM1ZnG8LabTxno661-KX9W17Je_uekAArXgMRtNXZFLifTnv9tqCs8BAAMCAANzAAM1BA',
        caption: 'Photo from file_id',
      }),
    ).resolves.toHaveProperty('photo');
  });

  test('should fail when photo is invalid', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: createReadStream('invalid/path'),
      }),
    ).rejects.toThrow('ENOENT: no such file or directory');
  });
});

describe('.sendAudio()', () => {
  test('should send audio from url', async () => {
    await expect(
      bot.sendAudio({
        chat_id: USERID,
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        caption: 'Audio from url',
      }),
    ).resolves.toHaveProperty('audio');
  });

  test('should send audio from file', async () => {
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

  test('should send audio from file_id', async () => {
    await expect(
      bot.sendAudio({
        chat_id: USERID,
        audio: 'CQACAgIAAxkDAAOBZnG8knE9iWcIt2j3iRMZfmw1OLMAAilRAAJNXZFLlcKgtkw7etQ1BA',
        caption: 'Audio from file_id',
      }),
    ).resolves.toHaveProperty('audio');
  });
});

describe('.sendDocument()', () => {
  test('should send document from url', async () => {
    await expect(
      bot.sendDocument({
        chat_id: USERID,
        document: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        caption: 'Document from url',
      }),
    ).resolves.toHaveProperty('document.mime_type', 'application/pdf');
  });

  test('should send document from FileOptions', async () => {
    await expect(
      bot.sendDocument({
        chat_id: USERID,
        document: new FileOptions(await readFile('tests/data/photo.jpg'), {
          filename: 'custom_file_name.jpg',
          contentType: 'image/jpeg',
        }),
      }),
    ).resolves.toHaveProperty('document.file_name', 'custom_file_name.jpg');
  });
});

describe('.sendVideo()', () => {
  test('should send video from url', async () => {
    await expect(
      bot.sendVideo({
        chat_id: USERID,
        video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
        caption: 'Video from url',
        has_spoiler: true,
      }),
    ).resolves.toHaveProperty('video');
  });
});

describe('.sendAnimation()', () => {
  test('should send animation from file', async () => {
    await expect(
      bot.sendAnimation({
        chat_id: USERID,
        animation: createReadStream('tests/data/animation.mp4'),
      }),
    ).resolves.toHaveProperty('animation');
  });
});

describe('.sendVoice()', () => {
  test('should send voice from file', async () => {
    await expect(
      bot.sendVoice({
        chat_id: USERID,
        voice: createReadStream('tests/data/voice.ogg'),
      }),
    ).resolves.toHaveProperty('voice');
  });

  test('should send voice from buffer', async () => {
    await expect(
      bot.sendVoice({
        chat_id: USERID,
        voice: await readFile('tests/data/voice.ogg'),
      }),
    ).resolves.toHaveProperty('voice');
  });
});

describe('.sendVideoNote()', () => {
  test('should send video note from file', async () => {
    await expect(
      bot.sendVideoNote({
        chat_id: USERID,
        video_note: createReadStream('tests/data/video_note.mp4'),
      }),
    ).resolves.toHaveProperty('video_note');
  });
});

describe('.sendPaidMedia()', () => {
  test('should send paid media: photo', async () => {
    await expect(
      bot.sendPaidMedia({
        chat_id: TEST_CHANNEL_ID,
        star_count: 1,
        media: [
          {
            type: 'photo',
            media: 'https://unsplash.it/640/480',
          },
        ],
        caption: 'Paid media: photo',
      }),
    ).resolves.toHaveProperty('paid_media');
  });

  test('should send paid media: video', async () => {
    await expect(
      bot.sendPaidMedia({
        chat_id: TEST_CHANNEL_ID,
        star_count: 1,
        media: [
          {
            type: 'video',
            media: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
          },
        ],
        caption: 'Paid media: video',
      }),
    ).resolves.toHaveProperty('paid_media');
  });

  test('should send paid media: photo and video', async () => {
    await expect(
      bot.sendPaidMedia({
        chat_id: TEST_CHANNEL_ID,
        star_count: 1,
        media: [
          { type: 'photo', media: 'https://unsplash.it/640/480' },
          {
            type: 'video',
            media: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
          },
        ],
        caption: 'Paid media: photo and video',
      }),
    ).resolves.toHaveProperty('paid_media');
  });

  test('should send paid media from file', async () => {
    await expect(
      bot.sendPaidMedia({
        chat_id: TEST_CHANNEL_ID,
        star_count: 1,
        media: [
          {
            type: 'video',
            media: createReadStream('tests/data/video.mp4'),
          },
        ],
        caption: 'Paid media from file',
      }),
    ).resolves.toHaveProperty('paid_media');
  });
});

describe('.sendMediaGroup()', () => {
  test('should send media group with urls', async () => {
    await expect(
      bot.sendMediaGroup({
        chat_id: USERID,
        media: [
          { type: 'photo', media: 'https://unsplash.it/640/480?1' },
          { type: 'photo', media: 'https://unsplash.it/640/480?2' },
          { type: 'photo', media: 'https://unsplash.it/640/480?3' },
          { type: 'photo', media: 'https://unsplash.it/640/480?4' },
          { type: 'photo', media: 'https://unsplash.it/640/480?5' },
        ],
      }),
    ).resolves.toHaveLength(5);
  });

  test('should send media group with files', async () => {
    await expect(
      bot.sendMediaGroup({
        chat_id: USERID,
        media: [
          { type: 'photo', media: createReadStream('tests/data/photo.jpg') },
          { type: 'photo', media: createReadStream('tests/data/photo.jpg') },
          { type: 'photo', media: createReadStream('tests/data/photo.jpg') },
        ],
      }),
    ).resolves.toHaveLength(3);
  });
});

describe('.sendLocation()', () => {
  test('should send location', async () => {
    await expect(
      bot.sendLocation({
        chat_id: USERID,
        latitude: 40.76799,
        longitude: -73.98129,
      }),
    ).resolves.toHaveProperty('location');
  });
});

describe('.sendVenue()', () => {
  test('should send venue', async () => {
    await expect(
      bot.sendVenue({
        chat_id: USERID,
        latitude: 40.76799,
        longitude: -73.98129,
        title: 'Central Park',
        address: 'New York City, NY',
      }),
    ).resolves.toHaveProperty('venue');
  });
});

describe('.sendContact()', () => {
  test('should send contact', async () => {
    await expect(
      bot.sendContact({
        chat_id: USERID,
        phone_number: '+1234567890',
        first_name: 'John',
        last_name: 'Doe',
      }),
    ).resolves.toHaveProperty('contact');
  });
});

describe('.sendPoll()', () => {
  test('should send poll', async () => {
    await expect(
      bot.sendPoll({
        chat_id: USERID,
        question: 'Do you like polls?',
        options: [{ text: 'Yes' }, { text: 'No' }],
        is_anonymous: true,
      }),
    ).resolves.toHaveProperty('poll');
  });
});

describe('.sendDice()', () => {
  test('should default to 6-sided dice', async () => {
    await expect(
      bot.sendDice({
        chat_id: USERID,
      }),
    ).resolves.toHaveProperty('dice.value', expect.any(Number));
  });

  test('should send dice with emoji', async () => {
    await expect(
      bot.sendDice({
        chat_id: USERID,
        emoji: '🎯',
      }),
    ).resolves.toHaveProperty('dice.value', expect.any(Number));
  });
});

describe('.sendChatAction()', () => {
  test('should send chat action', async () => {
    await expect(
      bot.sendChatAction({
        chat_id: USERID,
        action: 'typing',
      }),
    ).resolves.toBe(true);
  });
});

describe('.setMessageReaction()', () => {
  test('should set message reaction', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'Message to react',
    });

    await expect(
      bot.setMessageReaction({
        chat_id: USERID,
        message_id: message.message_id,
        reaction: [{ type: 'emoji', emoji: '👍' }],
      }),
    ).resolves.toBe(true);
  });
});

describe('.getUserProfilePhotos()', () => {
  test('should get user profile photos', async () => {
    await expect(
      bot.getUserProfilePhotos({
        user_id: USERID,
      }),
    ).resolves.toHaveProperty('photos', expect.any(Array));
  });
});

describe('.setUserEmojiStatus()', () => {
  test('should set user emoji status', async () => {
    await expect(
      bot.setUserEmojiStatus({
        user_id: USERID,
        emoji_status_custom_emoji_id: '',
      }),
    ).rejects.toThrow("403 Forbidden: not enough rights to change the user's emoji status");
  });
});

describe('.getFile()', () => {
  test('should get file', async () => {
    await expect(
      bot.getFile({
        file_id: 'AgACAgIAAxkDAAM1ZnG8LabTxno661-KX9W17Je_uekAArXgMRtNXZFLifTnv9tqCs8BAAMCAANzAAM1BA',
      }),
    ).resolves.toHaveProperty('file_unique_id');
  });
});

describe('.sendSticker()', () => {
  test('should send sticker from file', async () => {
    await expect(
      bot.sendSticker({
        chat_id: USERID,
        sticker: createReadStream('tests/data/sticker.webp'),
        emoji: '🐶',
      }),
    ).resolves.toHaveProperty('sticker');
  });
});

describe('.getStickerSet()', () => {
  test('should get sticker set', async () => {
    await expect(
      bot.getStickerSet({
        name: 'Animals',
      }),
    ).resolves.toHaveProperty('name', 'Animals');
  });
});

describe('.getStarTransactions()', () => {
  test('should get star transactions', async () => {
    await expect(
      bot.getStarTransactions({
        offset: 0,
        limit: 100,
      }),
    ).resolves.toHaveProperty('transactions');
  });

  test('should get star transactions without options', async () => {
    await expect(bot.getStarTransactions()).resolves.toHaveProperty('transactions');
  });
});

describe('.setMyName()', () => {
  test('should set my name', async () => {
    try {
      const result = await bot.setMyName({
        name: 'typescript-telegram-bot-api',
        language_code: 'en',
      });
      expect(result).toBe(true);
    } catch (error) {
      if (TelegramBot.isTelegramError(error) && error.response.error_code === 429) {
        expect(error.message).toMatch(/Too Many Requests/);
      } else {
        throw error;
      }
    }
  });
});

describe('.getMyName()', () => {
  test('should get my name', async () => {
    await expect(
      bot.getMyName({
        language_code: 'en',
      }),
    ).resolves.toHaveProperty('name');
  });
});

describe('.setMyDescription()', () => {
  test('should set my description', async () => {
    await expect(
      bot.setMyDescription({
        //long description
        description: 'This is a Telegram Bot for testing npm package typescript-telegram-bot-api',
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyDescription()', () => {
  test('should get my description', async () => {
    await expect(
      bot.getMyDescription({
        language_code: 'en',
      }),
    ).resolves.toHaveProperty('description');
  });
});

describe('.setMyShortDescription()', () => {
  test('should set my short description', async () => {
    await expect(
      bot.setMyShortDescription({
        short_description: 'A Telegram Bot API for TypeScript',
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyShortDescription()', () => {
  test('should get my short description', async () => {
    await expect(
      bot.getMyShortDescription({
        language_code: 'en',
      }),
    ).resolves.toHaveProperty('short_description');
  });
});

describe('.setMyCommands()', () => {
  test('should set my commands', async () => {
    await expect(
      bot.setMyCommands({
        commands: [
          { command: 'start', description: 'Start the bot' },
          { command: 'help', description: 'Get help' },
        ],
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyCommands()', () => {
  test('should get my commands', async () => {
    await expect(
      bot.getMyCommands({
        language_code: 'en',
      }),
    ).resolves.toBeInstanceOf(Array);
  });
  test('should get my commands without options', async () => {
    await expect(bot.getMyCommands()).resolves.toBeInstanceOf(Array);
  });
});

describe('.deleteMyCommands()', () => {
  test('should delete my commands', async () => {
    await expect(
      bot.deleteMyCommands({
        scope: { type: 'default' },
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.banChatMember()', () => {
  test('should ban chat member', async () => {
    await expect(
      bot.banChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.unbanChatMember()', () => {
  test('should unban chat member', async () => {
    await expect(
      bot.unbanChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.restrictChatMember()', () => {
  test('should restrict chat member', async () => {
    await expect(
      bot.restrictChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: TEST_GROUP_MEMBER_ID,
        permissions: {
          can_send_messages: true,
        },
      }),
    ).resolves.toBe(true);
  });
});

describe('.promoteChatMember()', () => {
  test('should promote chat member', async () => {
    await expect(
      bot.promoteChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: TEST_GROUP_MEMBER_ID,
        is_anonymous: true,
      }),
    ).resolves.toBe(true);
  });
});

describe('.SetChatAdministratorCustomTitle()', () => {
  test('should set chat administrator custom title', async () => {
    await expect(
      bot.setChatAdministratorCustomTitle({
        chat_id: TEST_GROUP_ID,
        user_id: TEST_GROUP_MEMBER_ID,
        custom_title: 'Custom title',
      }),
    ).resolves.toBe(true);
  });
});

describe('.banChatSenderChat()', () => {
  test('should ban chat sender chat', async () => {
    await expect(
      bot.banChatSenderChat({
        chat_id: TEST_GROUP_ID,
        sender_chat_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.unbanChatSenderChat()', () => {
  test('should unban chat sender chat', async () => {
    await expect(
      bot.unbanChatSenderChat({
        chat_id: TEST_GROUP_ID,
        sender_chat_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.setChatPermissions()', () => {
  test('should set chat permissions', async () => {
    await expect(
      bot.setChatPermissions({
        chat_id: TEST_GROUP_ID,
        permissions: {
          can_send_messages: true,
          can_send_audios: true,
          can_send_documents: true,
          can_send_photos: true,
          can_send_videos: true,
          can_send_video_notes: true,
          can_send_voice_notes: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: true,
          can_invite_users: true,
          can_pin_messages: true,
          can_manage_topics: true,
        },
      }),
    ).resolves.toBe(true);
  });
});

describe('.exportChatInviteLink()', () => {
  test('should export chat invite link', async () => {
    await expect(
      bot.exportChatInviteLink({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toContain('https://t.me/+');
  });
});

describe('.createChatInviteLink()', () => {
  test('should create chat invite link', async () => {
    await expect(
      bot.createChatInviteLink({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toHaveProperty('invite_link', expect.stringMatching('https://t.me/+'));
  });
});

describe('.editChatInviteLink()', () => {
  test('should edit chat invite link', async () => {
    const { invite_link } = await bot.createChatInviteLink({
      chat_id: TEST_GROUP_ID,
    });

    await expect(
      bot.editChatInviteLink({
        chat_id: TEST_GROUP_ID,
        name: 'New name',
        invite_link,
        expire_date: Math.floor(Date.now() / 1000) + 60,
      }),
    ).resolves.toHaveProperty('invite_link', expect.stringMatching('https://t.me/+'));
  });
});

describe('.createChatSubscriptionInviteLink()', () => {
  test('should create chat subscription invite link', async () => {
    await expect(
      bot.createChatSubscriptionInviteLink({
        chat_id: TEST_CHANNEL_ID,
        subscription_period: 2592000,
        subscription_price: 1,
      }),
    ).resolves.toHaveProperty('invite_link', expect.stringMatching('https://t.me/+'));
  });
});

describe('.editChatSubscriptionInviteLink()', () => {
  test('should edit chat subscription invite link', async () => {
    const { invite_link } = await bot.createChatSubscriptionInviteLink({
      chat_id: TEST_CHANNEL_ID,
      name: 'name',
      subscription_period: 2592000,
      subscription_price: 1,
    });

    await expect(
      bot.editChatSubscriptionInviteLink({
        chat_id: TEST_CHANNEL_ID,
        invite_link,
        name: 'New name',
      }),
    ).resolves.toHaveProperty('name', expect.stringMatching('New name'));
  });
});

describe('.revokeChatInviteLink()', () => {
  test('should revoke chat invite link', async () => {
    const { invite_link } = await bot.createChatInviteLink({
      chat_id: TEST_GROUP_ID,
    });

    await expect(
      bot.revokeChatInviteLink({
        chat_id: TEST_GROUP_ID,
        invite_link,
      }),
    ).resolves.toHaveProperty('invite_link', expect.stringMatching('https://t.me/+'));
  });
});

describe('.setChatPhoto()', () => {
  test('should set chat photo', async () => {
    await expect(
      bot.setChatPhoto({
        chat_id: TEST_GROUP_ID,
        photo: createReadStream('tests/data/photo.jpg'),
      }),
    ).resolves.toBe(true);
  });
});

describe('.deleteChatPhoto()', () => {
  beforeAll(async () => {
    await bot.setChatPhoto({
      chat_id: TEST_GROUP_ID,
      photo: createReadStream('tests/data/photo.jpg'),
    });
  });

  test('should delete chat photo', async () => {
    await expect(
      bot.deleteChatPhoto({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.setChatTitle()', () => {
  test('should set chat title', async () => {
    await expect(
      bot.setChatTitle({
        chat_id: TEST_GROUP_ID,
        title: 'Test Group for typescript-telegram-bot-api',
      }),
    ).resolves.toBe(true);
  });
});

describe('.setChatDescription()', () => {
  const unixTime = Math.floor(Date.now() / 1000);

  test('should set chat description', async () => {
    await expect(
      bot.setChatDescription({
        chat_id: TEST_GROUP_ID,
        description: `This is a test group for typescript-telegram-bot-api ${unixTime}`,
      }),
    ).resolves.toBe(true);
  });
});

describe('.pinChatMessage()', () => {
  test('should pin chat message', async () => {
    const message = await bot.sendMessage({
      chat_id: TEST_GROUP_ID,
      text: 'Message to pin',
    });

    await expect(
      bot.pinChatMessage({
        chat_id: TEST_GROUP_ID,
        message_id: message.message_id,
      }),
    ).resolves.toBe(true);
  });
});

describe('.unpinChatMessage()', () => {
  const unixTime = Math.floor(Date.now() / 1000);

  test('should unpin chat message', async () => {
    const message = await bot.sendMessage({
      chat_id: TEST_GROUP_ID,
      text: `Message to unpin ${unixTime}`,
    });

    await bot.pinChatMessage({
      chat_id: TEST_GROUP_ID,
      message_id: message.message_id,
    });

    await expect(
      bot.unpinChatMessage({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.unpinAllChatMessages()', () => {
  test('should unpin all chat messages', async () => {
    await expect(
      bot.unpinAllChatMessages({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.getChat()', () => {
  test('should get chat (group)', async () => {
    await expect(
      bot.getChat({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toHaveProperty('id', TEST_GROUP_ID);
  });

  test('should get chat (user)', async () => {
    await expect(
      bot.getChat({
        chat_id: USERID,
      }),
    ).resolves.toHaveProperty('id', USERID);
  });

  test('should get chat (chat not found)', async () => {
    await expect(
      bot.getChat({
        chat_id: 1,
      }),
    ).rejects.toThrow('400 Bad Request: chat not found');
  });
});

describe('.getChatAdministrators()', () => {
  test('should get chat administrators', async () => {
    await expect(
      bot.getChatAdministrators({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBeInstanceOf(Array);
  });
});

describe('.getChatMemberCount()', () => {
  test('should get chat members count', async () => {
    await expect(
      bot.getChatMemberCount({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBeGreaterThan(0);
  });
});

describe('.getChatMember()', () => {
  test('should get chat member', async () => {
    await expect(
      bot.getChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: TEST_GROUP_MEMBER_ID,
      }),
    ).resolves.toHaveProperty('user.id', TEST_GROUP_MEMBER_ID);
  });
});

describe('.setChatStickerSet()', () => {
  test('should set chat sticker set', async () => {
    await expect(
      bot.setChatStickerSet({
        chat_id: TEST_GROUP_ID,
        sticker_set_name: 'Animals',
      }),
    ).rejects.toThrow("400 Bad Request: can't set supergroup sticker set");
  });
});

describe('.deleteChatStickerSet()', () => {
  test('should delete chat sticker set', async () => {
    await expect(
      bot.deleteChatStickerSet({
        chat_id: TEST_GROUP_ID,
      }),
    ).rejects.toThrow("400 Bad Request: can't set supergroup sticker set");
  });
});

describe('.getForumTopicIconStickers()', () => {
  test('should get forum topic icon stickers', async () => {
    await expect(bot.getForumTopicIconStickers()).resolves.toBeInstanceOf(Array);
  });
});

describe('.createForumTopic()', () => {
  let createdTopic = null as null | ForumTopic;

  test('should create forum topic', async () => {
    createdTopic = await bot.createForumTopic({
      chat_id: TEST_GROUP_ID,
      name: 'Topic to create',
    });
    expect(createdTopic).toHaveProperty('name');
  });

  afterAll(async () => {
    if (createdTopic)
      await bot.deleteForumTopic({
        chat_id: TEST_GROUP_ID,
        message_thread_id: createdTopic.message_thread_id,
      });
  });
});

describe('.editForumTopic()', () => {
  let createdTopic = null as null | ForumTopic;
  beforeAll(async () => {
    createdTopic = await bot.createForumTopic({
      chat_id: TEST_GROUP_ID,
      name: 'Topic to edit',
    });
  });

  test('should edit forum topic', async () => {
    if (createdTopic) {
      await expect(
        bot.editForumTopic({
          chat_id: TEST_GROUP_ID,
          message_thread_id: createdTopic.message_thread_id,
          name: 'New Forum Topic',
          icon_custom_emoji_id: '🔥',
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (createdTopic) {
      await bot.deleteForumTopic({
        chat_id: TEST_GROUP_ID,
        message_thread_id: createdTopic.message_thread_id,
      });
    }
  });
});

describe('.closeForumTopic()', () => {
  let createdTopic: ForumTopic | null = null;

  beforeAll(async () => {
    createdTopic = await bot.createForumTopic({
      chat_id: TEST_GROUP_ID,
      name: 'Topic to close',
    });
  });

  test('should close forum topic', async () => {
    expect(createdTopic).not.toBeNull();
    if (createdTopic) {
      await expect(
        bot.closeForumTopic({
          chat_id: TEST_GROUP_ID,
          message_thread_id: createdTopic.message_thread_id,
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (createdTopic)
      await bot.deleteForumTopic({
        chat_id: TEST_GROUP_ID,
        message_thread_id: createdTopic.message_thread_id,
      });
  });
});

describe('.reopenForumTopic()', () => {
  let createdTopic: ForumTopic | null = null;

  beforeAll(async () => {
    createdTopic = await bot.createForumTopic({
      chat_id: TEST_GROUP_ID,
      name: 'Topic to reopen',
    });

    await bot.closeForumTopic({
      chat_id: TEST_GROUP_ID,
      message_thread_id: createdTopic.message_thread_id,
    });
  });

  test('should reopen forum topic', async () => {
    expect(createdTopic).not.toBeNull();
    if (createdTopic) {
      await expect(
        bot.reopenForumTopic({
          chat_id: TEST_GROUP_ID,
          message_thread_id: createdTopic.message_thread_id,
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (createdTopic) {
      await bot.deleteForumTopic({
        chat_id: TEST_GROUP_ID,
        message_thread_id: createdTopic.message_thread_id,
      });
    }
  });
});

describe('.deleteForumTopic()', () => {
  let createdTopic: ForumTopic | null = null;

  beforeAll(async () => {
    createdTopic = await bot.createForumTopic({
      chat_id: TEST_GROUP_ID,
      name: 'Topic to delete',
    });
  });

  test('should delete forum topic', async () => {
    expect(createdTopic).not.toBeNull();
    if (createdTopic) {
      await expect(
        bot.deleteForumTopic({
          chat_id: TEST_GROUP_ID,
          message_thread_id: createdTopic.message_thread_id,
        }),
      ).resolves.toBe(true);
    }
  });
});

describe('.unpinAllForumTopicMessages()', () => {
  let createdTopic: ForumTopic | null = null;

  beforeAll(async () => {
    createdTopic = await bot.createForumTopic({
      chat_id: TEST_GROUP_ID,
      name: 'Topic to unpin',
    });
  });

  test('should unpin all forum topic messages', async () => {
    expect(createdTopic).not.toBeNull();
    if (createdTopic) {
      await expect(
        bot.unpinAllForumTopicMessages({
          chat_id: TEST_GROUP_ID,
          message_thread_id: createdTopic.message_thread_id,
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (createdTopic) {
      await bot.deleteForumTopic({
        chat_id: TEST_GROUP_ID,
        message_thread_id: createdTopic.message_thread_id,
      });
    }
  });
});

describe('.editGeneralForumTopic()', () => {
  const unixTime = Math.floor(Date.now() / 1000);

  test('should edit general forum topic', async () => {
    await expect(
      bot.editGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
        name: `General Forum Topic ${unixTime}`,
      }),
    ).resolves.toBe(true);
  });
});

describe('.closeGeneralForumTopic()', () => {
  beforeAll(async () => {
    try {
      await bot.reopenGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      });
    } catch {
      // ignore
    }
  });

  test('should close general forum topic', async () => {
    await expect(
      bot.closeGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });

  afterAll(async () => {
    await bot.reopenGeneralForumTopic({
      chat_id: TEST_GROUP_ID,
    });
  });
});

describe('.reopenGeneralForumTopic()', () => {
  beforeAll(async () => {
    try {
      await bot.closeGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      });
    } catch {
      // ignore
    }
  });

  test('should reopen general forum topic', async () => {
    await expect(
      bot.reopenGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.hideGeneralForumTopic()', () => {
  test('should hide general forum topic', async () => {
    await expect(
      bot.hideGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.unhideGeneralForumTopic()', () => {
  beforeAll(async () => {
    try {
      await bot.hideGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      });
    } catch {
      // ignore
    }
  });

  test('should unhide general forum topic', async () => {
    await expect(
      bot.unhideGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.unpinAllGeneralForumTopicMessages()', () => {
  test('should unpin all general forum topic messages', async () => {
    await expect(
      bot.unpinAllGeneralForumTopicMessages({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.answerCallbackQuery()', () => {
  test('should answer callback query', async () => {
    await expect(
      bot.answerCallbackQuery({
        callback_query_id: 'QUERY_ID_INVALID',
        text: 'Callback query answered',
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });
});

describe('.getUserChatBoosts()', () => {
  test('should get user chat boosts', async () => {
    await expect(
      bot.getUserChatBoosts({
        chat_id: TEST_GROUP_ID,
        user_id: USERID,
      }),
    ).resolves.toHaveProperty('boosts');
  });
});

describe('.getBusinessConnection()', () => {
  test('should get business connection', async () => {
    await expect(
      bot.getBusinessConnection({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setChatMenuButton()', () => {
  test('should set chat menu button', async () => {
    await expect(
      bot.setChatMenuButton({
        chat_id: USERID,
        menu_button: {
          type: 'default',
        },
      }),
    ).resolves.toBe(true);
  });
});

describe('.getChatMenuButton()', () => {
  test('should get chat menu button', async () => {
    await expect(
      bot.getChatMenuButton({
        chat_id: USERID,
      }),
    ).resolves.toHaveProperty('type');
  });
});

describe('.setMyDefaultAdministratorRights()', () => {
  test('should set my default administrator rights', async () => {
    await expect(
      bot.setMyDefaultAdministratorRights({
        rights: {
          is_anonymous: true,
          can_manage_chat: true,
          can_delete_messages: true,
          can_manage_video_chats: true,
          can_restrict_members: true,
          can_promote_members: true,
          can_change_info: true,
          can_invite_users: true,
          can_post_stories: true,
          can_edit_stories: true,
          can_delete_stories: true,
        },
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyDefaultAdministratorRights()', () => {
  test('should get my default administrator rights', async () => {
    await expect(bot.getMyDefaultAdministratorRights({})).resolves.toHaveProperty('is_anonymous');
  });
});

describe('.approveChatJoinRequest()', () => {
  test('should approve chat join request', async () => {
    await expect(
      bot.approveChatJoinRequest({
        chat_id: TEST_GROUP_ID,
        user_id: 10000,
      }),
    ).rejects.toThrow('400 Bad Request: HIDE_REQUESTER_MISSING');
  });
});

describe('.declineChatJoinRequest()', () => {
  test('should decline chat join request', async () => {
    await expect(
      bot.declineChatJoinRequest({
        chat_id: TEST_GROUP_ID,
        user_id: 10000,
      }),
    ).rejects.toThrow('400 Bad Request: HIDE_REQUESTER_MISSING');
  });
});

describe('.leaveChat()', () => {
  test('should leave chat', async () => {
    await expect(
      bot.leaveChat({
        chat_id: 1,
      }),
    ).rejects.toThrow('400 Bad Request: chat not found');
  });
});

describe('.editMessageText()', () => {
  test('should edit message text', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'Message to edit',
    });

    await expect(
      bot.editMessageText({
        chat_id: USERID,
        message_id: message.message_id,
        text: 'Edited message',
      }),
    ).resolves.toHaveProperty('text', 'Edited message');
  });
});

describe('.editMessageCaption()', () => {
  test('should edit message caption', async () => {
    const message = await bot.sendPhoto({
      chat_id: USERID,
      photo: 'https://unsplash.it/640/480',
      caption: 'Caption',
    });

    await expect(
      bot.editMessageCaption({
        chat_id: USERID,
        message_id: message.message_id,
        caption: 'Edited caption',
      }),
    ).resolves.toHaveProperty('caption', 'Edited caption');
  });
});

describe('.editMessageMedia()', () => {
  test('should edit message media', async () => {
    const message = await bot.sendPhoto({
      chat_id: USERID,
      photo: 'https://unsplash.it/640/480',
      caption: 'Caption',
    });

    await expect(
      bot.editMessageMedia({
        chat_id: USERID,
        message_id: message.message_id,
        media: {
          type: 'photo',
          media: 'https://unsplash.it/480/640',
        },
      }),
    ).resolves.toHaveProperty('photo');
  });
});

describe('.editMessageLiveLocation()', () => {
  test('should edit message live location', async () => {
    const message = await bot.sendLocation({
      chat_id: USERID,
      latitude: 40.76799,
      longitude: -73.98129,
      live_period: 60,
    });

    await expect(
      bot.editMessageLiveLocation({
        chat_id: USERID,
        message_id: message.message_id,
        latitude: 40.76899,
        longitude: -73.98229,
      }),
    ).resolves.toHaveProperty('location');
  });
});

describe('.stopMessageLiveLocation()', () => {
  test('should stop message live location', async () => {
    const message = await bot.sendLocation({
      chat_id: USERID,
      latitude: 40.76799,
      longitude: -73.98129,
      live_period: 60,
    });

    await expect(
      bot.stopMessageLiveLocation({
        chat_id: USERID,
        message_id: message.message_id,
      }),
    ).resolves.toHaveProperty('location');
  });
});

describe('.editMessageReplyMarkup()', () => {
  test('should edit message reply markup', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'Message to edit',
      reply_markup: {
        inline_keyboard: [[{ text: 'Button', callback_data: 'button' }]],
      },
    });

    await expect(
      bot.editMessageReplyMarkup({
        chat_id: USERID,
        message_id: message.message_id,
        reply_markup: {
          inline_keyboard: [[{ text: 'Edited button', callback_data: 'edited_button' }]],
        },
      }),
    ).resolves.toHaveProperty('reply_markup');
  });
});

describe('.stopPoll()', () => {
  test('should stop poll', async () => {
    const message = await bot.sendPoll({
      chat_id: USERID,
      question: 'Do you like polls?',
      options: [{ text: 'Yes' }, { text: 'No' }],
      is_anonymous: true,
    });

    await expect(
      bot.stopPoll({
        chat_id: USERID,
        message_id: message.message_id,
      }),
    ).resolves.toHaveProperty('question');
  });
});

describe('.deleteMessage()', () => {
  test('should delete message', async () => {
    const message = await bot.sendMessage({
      chat_id: USERID,
      text: 'Message to delete',
    });

    await expect(
      bot.deleteMessage({
        chat_id: USERID,
        message_id: message.message_id,
      }),
    ).resolves.toBe(true);
  });
});

describe('.deleteMessages()', () => {
  test('should delete messages', async () => {
    const [message1, message2] = await Promise.all([
      bot.sendMessage({
        chat_id: USERID,
        text: 'Message 1 to delete',
      }),
      bot.sendMessage({
        chat_id: USERID,
        text: 'Message 2 to delete',
      }),
    ]);

    await expect(
      bot.deleteMessages({
        chat_id: USERID,
        message_ids: [message1.message_id, message2.message_id],
      }),
    ).resolves.toBe(true);
  });
});

describe('.answerInlineQuery()', () => {
  test('should answer inline query', async () => {
    await expect(
      bot.answerInlineQuery({
        inline_query_id: 'QUERY_ID',
        results: [
          {
            type: 'article',
            id: '1',
            title: 'Article',
            input_message_content: {
              message_text: 'Article content',
            },
          },
        ],
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });
});

describe('.answerWebAppQuery()', () => {
  test('should answer web app query', async () => {
    await expect(
      bot.answerWebAppQuery({
        web_app_query_id: 'QUERY_ID',
        result: {
          type: 'article',
          id: '1',
          title: 'Article',
          input_message_content: {
            message_text: 'Article content',
          },
        },
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });
});

describe('.sendInvoice()', () => {
  test('should send invoice', async () => {
    await expect(
      bot.sendInvoice({
        chat_id: USERID,
        title: 'Invoice',
        description: 'Invoice description',
        payload: 'payload',
        currency: 'XTR',
        prices: [{ label: 'Price', amount: 100 }],
        start_parameter: 'start_parameter',
        reply_markup: {
          inline_keyboard: [
            [{ text: '️Pay ⭐️100', pay: true }],
            [{ text: 'Cancel', callback_data: 'cancel', pay: true }],
          ],
        },
      }),
    ).resolves.toHaveProperty('invoice');
  });
});

describe('.createInvoiceLink()', () => {
  test('should create invoice link', async () => {
    await expect(
      bot.createInvoiceLink({
        title: 'Invoice',
        description: 'Invoice description',
        payload: 'payload',

        // provider_token: 'PROVIDER_TOKEN',
        currency: 'XTR',
        prices: [{ label: 'Price', amount: 100 }],
      }),
    ).resolves.toContain('https://t.me/$');
  });
});

describe('.answerShippingQuery()', () => {
  test('should throw an error for outdated or invalid query ID on error response', async () => {
    await expect(
      bot.answerShippingQuery({
        shipping_query_id: 'QUERY_ID',
        ok: false,
        error_message: 'Error message',
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });

  test('should throw an error for outdated or invalid query ID on success response', async () => {
    await expect(
      bot.answerShippingQuery({
        shipping_query_id: 'QUERY_ID',
        ok: true,
        shipping_options: [
          {
            id: '1',
            title: 'Shipping option',
            prices: [{ label: 'Price', amount: 100 }],
          },
        ],
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });
});

describe('.answerPreCheckoutQuery()', () => {
  test('should throw an error for outdated or invalid query ID on error response', async () => {
    await expect(
      bot.answerPreCheckoutQuery({
        pre_checkout_query_id: 'QUERY_ID',
        ok: false,
        error_message: 'Error message',
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });

  test('should throw an error for outdated or invalid query ID on success response', async () => {
    await expect(
      bot.answerPreCheckoutQuery({
        pre_checkout_query_id: 'QUERY_ID',
        ok: true,
      }),
    ).rejects.toThrow('400 Bad Request: query is too old and response timeout expired or query ID is invalid');
  });
});

describe('.refundStarPayment()', () => {
  test('should refund star payment', async () => {
    await expect(
      bot.refundStarPayment({
        user_id: USERID,
        telegram_payment_charge_id: 'PAYMENT_ID',
      }),
    ).rejects.toThrow('400 Bad Request: CHARGE_ID_EMPTY');
  });
});

describe('.editUserStarSubscription()', () => {
  test('should edit user star subscription', async () => {
    await expect(
      bot.editUserStarSubscription({
        user_id: USERID,
        telegram_payment_charge_id: 'CHARGE_ID',
        is_canceled: true,
      }),
    ).rejects.toThrow('400 Bad Request: CHARGE_ID_INVALID');
  });
});

describe('.getStickerSet()', () => {
  test('should get custom emoji stickers', async () => {
    await expect(bot.getStickerSet({ name: 'Animals' })).resolves.toHaveProperty('name', 'Animals');
  });
});

describe('.getCustomEmojiStickers()', () => {
  test('should get custom emoji stickers', async () => {
    await expect(
      bot.getCustomEmojiStickers({
        custom_emoji_ids: ['5380109565226391871'],
      }),
    ).resolves.toBeInstanceOf(Array);
  });
});

describe('.uploadStickerFile()', () => {
  test('should upload sticker file', async () => {
    await expect(
      bot.uploadStickerFile({
        user_id: USERID,
        sticker: createReadStream('tests/data/sticker.webp'),
        sticker_format: 'static',
      }),
    ).resolves.toHaveProperty('file_id');
  });
});

describe('.createNewStickerSet()', () => {
  let me = null as null | User;

  beforeAll(async () => {
    me = await bot.getMe();
  });

  test('should create new sticker set', async () => {
    expect(me).not.toBeNull();
    if (me) {
      await expect(
        bot.createNewStickerSet({
          user_id: USERID,
          name: `new_sticker_set_by_${me.username}`,
          title: 'NewStickerSet',
          sticker_type: 'regular',
          stickers: [
            {
              emoji_list: ['🐶'],
              sticker: createReadStream('tests/data/sticker.webp'),
              format: 'static',
            },
            {
              emoji_list: ['🐶'],
              sticker: await readFile('tests/data/sticker.webp'),
              format: 'static',
            },
            {
              emoji_list: ['🐶'],
              sticker: new FileOptions(await readFile('tests/data/sticker.webp'), {
                filename: 'dog.webp',
                contentType: 'image/webp',
              }),
              format: 'static',
            },
          ],
        }),
      ).resolves.toBe(true);
    }
  });

  test('should have 3 stickers in the set', async () => {
    expect(me).not.toBeNull();
    if (me) {
      const stickerSet = await bot.getStickerSet({
        name: `new_sticker_set_by_${me.username}`,
      });
      expect(stickerSet.stickers.length).toBe(3);
    }
  });

  afterAll(async () => {
    if (me) {
      await bot.deleteStickerSet({
        name: `new_sticker_set_by_${me.username}`,
      });
    }
  });
});

describe('.addStickerToSet()', () => {
  let stickerFile = null as null | File;
  let me = null as null | User;

  beforeAll(async () => {
    stickerFile = await bot.uploadStickerFile({
      user_id: USERID,
      sticker: createReadStream('tests/data/sticker.webp'),
      sticker_format: 'static',
    });
    me = await bot.getMe();
  });

  test('should add sticker to set', async () => {
    expect(stickerFile).not.toBeNull();
    if (stickerFile && me) {
      await expect(
        bot.addStickerToSet({
          user_id: USERID,
          name: `sticker_set_by_${me.username}`,
          sticker: {
            emoji_list: ['🐶'],
            sticker: stickerFile.file_id,
            format: 'static',
          },
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (stickerFile && me) {
      const stickerSet = await bot.getStickerSet({
        name: `sticker_set_by_${me.username}`,
      });

      await Promise.all(
        stickerSet.stickers.map(async (sticker) => {
          await bot.deleteStickerFromSet({
            sticker: sticker.file_id,
          });
        }),
      );
    }
  });
});

describe(`setStickerEmojiList(), setStickerKeywords(), setStickerSetTitle(), 
setStickerSetThumbnail(), setStickerMaskPosition(), .replaceStickerInSet()`, () => {
  let stickerSet = null as null | StickerSet;
  let me = null as null | User;

  beforeAll(async () => {
    me = await bot.getMe();
    await bot.addStickerToSet({
      user_id: USERID,
      name: `sticker_set_by_${me.username}`,
      sticker: {
        emoji_list: ['👻'],
        sticker: createReadStream('tests/data/sticker.webp'),
        format: 'static',
      },
    });
    stickerSet = await bot.getStickerSet({
      name: `sticker_set_by_${me.username}`,
    });
  });

  test('should set sticker emoji list', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.setStickerEmojiList({
          sticker: stickerSet.stickers[0].file_id,
          emoji_list: ['🐶', '🐕'],
        }),
      ).resolves.toBe(true);
    }
  });

  test('should set sticker keywords', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.setStickerKeywords({
          sticker: stickerSet.stickers[0].file_id,
          keywords: ['dog', 'puppy'],
        }),
      ).resolves.toBe(true);
    }
  });

  test('should set sticker title', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.setStickerSetTitle({
          name: `sticker_set_by_${me.username}`,
          title: 'Dog Sticker',
        }),
      ).resolves.toBe(true);
    }
  });

  test('should set sticker set thumbnail', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.setStickerSetThumbnail({
          name: `sticker_set_by_${me.username}`,
          user_id: USERID,
          thumbnail: createReadStream('tests/data/video_emoji.webm'),
          format: 'video',
        }),
      ).resolves.toBe(true);
    }
  });

  test('should set sticker mask position', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.setStickerMaskPosition({
          sticker: stickerSet.stickers[0].file_id,
          mask_position: {
            point: 'eyes',
            x_shift: 0.5,
            y_shift: 0.5,
            scale: 1,
          },
        }),
      ).rejects.toThrow('400 Bad Request: STICKER_MASK_COORDS_NOT_SUPPORTED');
    }
  });

  test('should replace sticker in set', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.replaceStickerInSet({
          old_sticker: stickerSet.stickers[0].file_id,
          user_id: USERID,
          name: `sticker_set_by_${me.username}`,
          sticker: {
            emoji_list: ['🐶'],
            sticker: createReadStream('tests/data/sticker.webp'),
            format: 'static',
          },
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (me) {
      const stickerSet = await bot.getStickerSet({
        name: `sticker_set_by_${me.username}`,
      });

      await Promise.all(
        stickerSet.stickers.map(async (sticker) => {
          await bot.deleteStickerFromSet({
            sticker: sticker.file_id,
          });
        }),
      );
    }
  });
});

describe('.setStickerPositionInSet(), setCustomEmojiStickerSetThumbnail()', () => {
  let me = null as null | User;
  let stickerSet = null as null | StickerSet;

  beforeAll(async () => {
    me = await bot.getMe();
    await bot.createNewStickerSet({
      user_id: USERID,
      name: `video_emoji_by_${me.username}`,
      title: 'Sticker Set',
      sticker_type: 'custom_emoji',
      needs_repainting: true,
      stickers: [
        {
          emoji_list: ['✨'],
          sticker: createReadStream('tests/data/video_emoji.webm'),
          format: 'video',
        },
        {
          emoji_list: ['✨'],
          sticker: createReadStream('tests/data/video_emoji.webm'),
          format: 'video',
        },
      ],
    });

    stickerSet = await bot.getStickerSet({
      name: `video_emoji_by_${me.username}`,
    });
  });

  test('should set sticker position in set', async () => {
    expect(stickerSet).not.toBeNull();
    if (stickerSet) {
      await expect(
        bot.setStickerPositionInSet({
          sticker: stickerSet.stickers[0].file_id,
          position: 1,
        }),
      ).resolves.toBe(true);
    }
  });

  test('should set custom emoji sticker set thumbnail', async () => {
    expect(stickerSet).not.toBeNull();
    expect(me).not.toBeNull();
    if (stickerSet && me) {
      await expect(
        bot.setCustomEmojiStickerSetThumbnail({
          name: `video_emoji_by_${me.username}`,
          custom_emoji_id: '',
        }),
      ).resolves.toBe(true);
    }
  });

  afterAll(async () => {
    if (me) {
      await bot.deleteStickerSet({
        name: `video_emoji_by_${me.username}`,
      });
    }
  });
});

describe('.sendGame()', () => {
  test('should send game', async () => {
    await expect(
      bot.sendGame({
        chat_id: USERID,
        game_short_name: 'game',
      }),
    ).resolves.toHaveProperty('game.title', 'game');
  });
});

describe('.setGameScore()', () => {
  let message_id = null as null | number;

  beforeAll(async () => {
    const message = await bot.sendGame({
      chat_id: USERID,
      game_short_name: 'game',
    });
    message_id = message.message_id;
  });

  test('should set game score', async () => {
    expect(message_id).not.toBeNull();
    if (message_id) {
      await expect(
        bot.setGameScore({
          user_id: USERID,
          score: Math.floor(Math.random() * 10000),
          chat_id: USERID,
          message_id: message_id,
          force: true,
        }),
      ).resolves.toHaveProperty('game.title', 'game');
    }
  });
});

describe('.setGameScore()', () => {
  let message_id = null as null | number;
  beforeAll(async () => {
    const message = await bot.sendGame({
      chat_id: USERID,
      game_short_name: 'game',
    });
    message_id = message.message_id;
  });

  test('should set game score', async () => {
    expect(message_id).not.toBeNull();
    await expect(
      bot.setGameScore({
        user_id: USERID,
        score: Math.floor(Math.random() * 10000),
        chat_id: USERID,
        message_id: message_id as number,
        force: true,
      }),
    ).resolves.toHaveProperty('game.title', 'game');
  });
});

describe('.getGameHighScores()', () => {
  let message_id = null as null | number;

  beforeAll(async () => {
    const message = await bot.sendGame({
      chat_id: USERID,
      game_short_name: 'game',
    });
    message_id = message.message_id;
  });

  test('should get game high scores', async () => {
    expect(message_id).not.toBeNull();
    await expect(
      bot.getGameHighScores({
        user_id: USERID,
        chat_id: USERID,
        message_id: message_id as number,
      }),
    ).resolves.toBeInstanceOf(Array);
  });
});

describe('.setPassportDataErrors()', () => {
  test('should set passport data errors', async () => {
    await expect(
      bot.setPassportDataErrors({
        user_id: USERID,
        errors: [
          {
            source: 'data',
            type: 'passport',
            field_name: 'name',
            data_hash: '78EJbNOmoK3Axtg7yzA9cA==',
            message: 'Error message',
          },
        ],
      }),
    ).rejects.toThrow('400 Bad Request: DATA_HASH_SIZE_INVALID');
  });
});

describe('.getAvailableGifts()', () => {
  test('should get available gifts', async () => {
    await expect(bot.getAvailableGifts()).resolves.toHaveProperty('gifts');
  });
});

describe('.sendGift()', () => {
  test('should send gift', async () => {
    const gifts = (await bot.getAvailableGifts()).gifts;

    await expect(
      bot.sendGift({
        user_id: USERID,
        gift_id: gifts[0].id,
        text: 'text',
      }),
    ).rejects.toThrow('400 Bad Request: BALANCE_TOO_LOW');
  });
});

describe('.verifyUser()', () => {
  test('should verify user', async () => {
    await expect(
      bot.verifyUser({
        user_id: USERID,
        custom_description: 'description',
      }),
    ).rejects.toThrow('400 Bad Request: BOT_VERIFIER_FORBIDDEN');
  });
});

describe('.verifyChat()', () => {
  test('should verify chat', async () => {
    await expect(
      bot.verifyChat({
        chat_id: USERID,
        custom_description: 'description',
      }),
    ).rejects.toThrow('400 Bad Request: BOT_VERIFIER_FORBIDDEN');
  });
});

describe('.removeUserVerification()', () => {
  test('should remove user verification', async () => {
    await expect(
      bot.removeUserVerification({
        user_id: USERID,
      }),
    ).rejects.toThrow('400 Bad Request: BOT_VERIFIER_FORBIDDEN');
  });
});

describe('.removeChatVerification()', () => {
  test('should remove chat verification', async () => {
    await expect(
      bot.removeChatVerification({
        chat_id: USERID,
      }),
    ).rejects.toThrow('400 Bad Request: BOT_VERIFIER_FORBIDDEN');
  });
});

describe('.readBusinessMessage()', () => {
  test('should read business message', async () => {
    await expect(
      bot.readBusinessMessage({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        chat_id: USERID,
        message_id: 1,
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.deleteBusinessMessages()', () => {
  test('should delete business messages', async () => {
    await expect(
      bot.deleteBusinessMessages({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        message_ids: [1, 2],
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setBusinessAccountName()', () => {
  test('should set business account name', async () => {
    await expect(
      bot.setBusinessAccountName({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        first_name: 'John',
        last_name: 'Doe',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setBusinessAccountUsername()', () => {
  test('should set business account username', async () => {
    await expect(
      bot.setBusinessAccountUsername({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        username: 'testusername',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setBusinessAccountBio()', () => {
  test('should set business account bio', async () => {
    await expect(
      bot.setBusinessAccountBio({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        bio: 'Test bio',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setBusinessAccountProfilePhoto()', () => {
  test('should set business account profile photo', async () => {
    await expect(
      bot.setBusinessAccountProfilePhoto({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        photo: { type: 'static', photo: await readFile('tests/data/photo.jpg') },
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.removeBusinessAccountProfilePhoto()', () => {
  test('should remove business account profile photo', async () => {
    await expect(
      bot.removeBusinessAccountProfilePhoto({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setBusinessAccountGiftSettings()', () => {
  test('should set business account gift settings', async () => {
    await expect(
      bot.setBusinessAccountGiftSettings({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        show_gift_button: true,
        accepted_gift_types: {
          unlimited_gifts: true,
          limited_gifts: true,
          unique_gifts: true,
          premium_subscription: true,
        },
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.getBusinessAccountStarBalance()', () => {
  test('should get business account star balance', async () => {
    await expect(
      bot.getBusinessAccountStarBalance({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.transferBusinessAccountStars()', () => {
  test('should transfer business account stars', async () => {
    await expect(
      bot.transferBusinessAccountStars({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        star_count: 100,
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.getBusinessAccountGifts()', () => {
  test('should get business account gifts', async () => {
    await expect(
      bot.getBusinessAccountGifts({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.convertGiftToStars()', () => {
  test('should convert gift to stars', async () => {
    await expect(
      bot.convertGiftToStars({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        owned_gift_id: 'INVALID_GIFT_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.upgradeGift()', () => {
  test('should upgrade gift', async () => {
    await expect(
      bot.upgradeGift({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        owned_gift_id: 'INVALID_GIFT_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.transferGift()', () => {
  test('should transfer gift', async () => {
    await expect(
      bot.transferGift({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        owned_gift_id: 'INVALID_GIFT_ID',
        new_owner_chat_id: USERID,
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.postStory()', () => {
  test('should post story', async () => {
    await expect(
      bot.postStory({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        content: {
          type: 'photo',
          photo: await readFile('tests/data/photo.jpg'),
        },
        active_period: 86400,
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.editStory()', () => {
  test('should edit story', async () => {
    await expect(
      bot.editStory({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        story_id: 'INVALID_STORY_ID',
        content: {
          type: 'photo',
          photo: await readFile('tests/data/photo.jpg'),
        },
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.deleteStory()', () => {
  test('should delete story', async () => {
    await expect(
      bot.deleteStory({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        story_id: 'INVALID_STORY_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.giftPremiumSubscription()', () => {
  test('should gift premium subscription', async () => {
    await expect(
      bot.giftPremiumSubscription({
        user_id: USERID,
        month_count: 6,
        star_count: 1500,
      }),
    ).rejects.toThrow('400 Bad Request: BALANCE_TOO_LOW');
  });
});

describe('.sendChecklist()', () => {
  test('should send checklist', async () => {
    await expect(
      bot.sendChecklist({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        chat_id: USERID,
        checklist: {
          title: 'Test Checklist',
          tasks: [
            { id: 1, text: 'Task 1' },
            { id: 2, text: 'Task 2' },
          ],
        },
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.editMessageChecklist()', () => {
  test('should edit message checklist', async () => {
    await expect(
      bot.editMessageChecklist({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
        chat_id: USERID,
        message_id: 1,
        checklist: {
          title: 'Updated Checklist',
          tasks: [
            { id: 1, text: 'Updated Task 1', completion_date: Date.now() / 1000 },
            { id: 2, text: 'Updated Task 2' },
          ],
        },
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.getMyStarBalance()', () => {
  test('should get my star balance', async () => {
    await expect(bot.getMyStarBalance()).resolves.toHaveProperty('amount', 0);
  });
});
