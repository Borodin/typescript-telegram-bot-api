import 'dotenv/config';
import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
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

  it('should send photo from stream', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: createReadStream('tests/data/photo.jpg'),
        caption: 'Photo from stream',
      }),
    ).resolves.toHaveProperty('photo');
  });

  it('should send photo from buffer', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo: await readFile('tests/data/photo.jpg'),
        caption: 'Photo from buffer',
      }),
    ).resolves.toHaveProperty('photo');
  });

  it('should send photo from file_id', async () => {
    await expect(
      bot.sendPhoto({
        chat_id: USERID,
        photo:
          'AgACAgIAAxkDAAM1ZnG8LabTxno661-KX9W17Je_uekAArXgMRtNXZFLifTnv9tqCs8BAAMCAANzAAM1BA',
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
          'CQACAgIAAxkDAAOBZnG8knE9iWcIt2j3iRMZfmw1OLMAAilRAAJNXZFLlcKgtkw7etQ1BA',
        caption: 'Audio from file_id',
      }),
    ).resolves.toHaveProperty('audio');
  });
});

describe('.sendDocument()', () => {
  it('should be defined', () => {
    expect(bot.sendDocument).toBeDefined();
  });

  it('should send document from url', async () => {
    await expect(
      bot.sendDocument({
        chat_id: USERID,
        document:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        caption: 'Document from url',
      }),
    ).resolves.toHaveProperty('document.mime_type', 'application/pdf');
  });
});

describe('.sendVideo()', () => {
  it('should be defined', () => {
    expect(bot.sendVideo).toBeDefined();
  });

  it('should send video from url', async () => {
    await expect(
      bot.sendVideo({
        chat_id: USERID,
        video:
          'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
        caption: 'Video from url',
        has_spoiler: true,
      }),
    ).resolves.toHaveProperty('video');
  });
});

describe('.sendAnimation()', () => {
  it('should be defined', () => {
    expect(bot.sendAnimation).toBeDefined();
  });

  it('should send animation from file', async () => {
    await expect(
      bot.sendAnimation({
        chat_id: USERID,
        animation: createReadStream('tests/data/animation.mp4'),
      }),
    ).resolves.toHaveProperty('animation');
  });
});

describe('.sendVoice()', () => {
  it('should be defined', () => {
    expect(bot.sendVoice).toBeDefined();
  });

  it('should send voice from file', async () => {
    await expect(
      bot.sendVoice({
        chat_id: USERID,
        voice: createReadStream('tests/data/voice.ogg'),
      }),
    ).resolves.toHaveProperty('voice');
  });
});

describe('.sendVideoNote()', () => {
  it('should be defined', () => {
    expect(bot.sendVideoNote).toBeDefined();
  });

  it('should send video note from file', async () => {
    await expect(
      bot.sendVideoNote({
        chat_id: USERID,
        video_note: createReadStream('tests/data/video_note.mp4'),
      }),
    ).resolves.toHaveProperty('video_note');
  });
});

describe('.sendMediaGroup()', () => {
  it('should be defined', () => {
    expect(bot.sendMediaGroup).toBeDefined();
  });

  it('should send media group', async () => {
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
});

describe('.sendLocation()', () => {
  it('should be defined', () => {
    expect(bot.sendLocation).toBeDefined();
  });

  it('should send location', async () => {
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
  it('should be defined', () => {
    expect(bot.sendVenue).toBeDefined();
  });

  it('should send venue', async () => {
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
  it('should be defined', () => {
    expect(bot.sendContact).toBeDefined();
  });

  it('should send contact', async () => {
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
  it('should be defined', () => {
    expect(bot.sendPoll).toBeDefined();
  });

  it('should send poll', async () => {
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
  it('should be defined', () => {
    expect(bot.sendDice).toBeDefined();
  });

  it('should default to 6-sided dice', async () => {
    await expect(
      bot.sendDice({
        chat_id: USERID,
      }),
    ).resolves.toHaveProperty('dice.value', expect.any(Number));
  });

  it('should send dice with emoji', async () => {
    await expect(
      bot.sendDice({
        chat_id: USERID,
        emoji: '🎯',
      }),
    ).resolves.toHaveProperty('dice.value', expect.any(Number));
  });
});

describe('.sendChatAction()', () => {
  it('should be defined', () => {
    expect(bot.sendChatAction).toBeDefined();
  });

  it('should send chat action', async () => {
    await expect(
      bot.sendChatAction({
        chat_id: USERID,
        action: 'typing',
      }),
    ).resolves.toBe(true);
  });
});

describe('.setMessageReaction()', () => {
  it('should be defined', () => {
    expect(bot.setMessageReaction).toBeDefined();
  });

  it('should set message reaction', async () => {
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
  it('should be defined', () => {
    expect(bot.getUserProfilePhotos).toBeDefined();
  });

  it('should get user profile photos', async () => {
    await expect(
      bot.getUserProfilePhotos({
        user_id: USERID,
      }),
    ).resolves.toHaveProperty('photos', expect.any(Array));
  });
});

describe('.getFile()', () => {
  it('should be defined', () => {
    expect(bot.getFile).toBeDefined();
  });

  it('should get file', async () => {
    await expect(
      bot.getFile({
        file_id:
          'AgACAgIAAxkDAAM1ZnG8LabTxno661-KX9W17Je_uekAArXgMRtNXZFLifTnv9tqCs8BAAMCAANzAAM1BA',
      }),
    ).resolves.toHaveProperty('file_unique_id');
  });
});

describe('.sendSticker()', () => {
  it('should be defined', () => {
    expect(bot.sendSticker).toBeDefined();
  });

  it('should send sticker from file', async () => {
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
  it('should be defined', () => {
    expect(bot.getStickerSet).toBeDefined();
  });

  it('should get sticker set', async () => {
    await expect(
      bot.getStickerSet({
        name: 'Animals',
      }),
    ).resolves.toHaveProperty('name', 'Animals');
  });
});
