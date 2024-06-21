import 'dotenv/config';
import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
import { TelegramBot } from '../src';
import { TelegramError } from '../src/errors';
import { ForumTopic } from '../src/types';

const TOKEN = process.env.TEST_TELEGRAM_TOKEN as string;
const USERID = parseInt(process.env.TEST_USER_ID as string);
const TEST_GROUP_ID = parseInt(process.env.TEST_GROUP_ID as string);
const TEST_GROUP_MEMBER_ID = parseInt(
  process.env.TEST_GROUP_MEMBER_ID as string,
);

const bot = new TelegramBot({
  botToken: TOKEN,
  autoRetry: true,
});

describe('TelegramBot', () => {
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

  it('should throw error when baseURL is invalid', async () => {
    await expect(
      new TelegramBot({
        botToken: TOKEN,
        baseURL: 'https://example.com',
      }).getMe(),
    ).rejects.toThrow('Invalid response');
  });
});

describe('.startPolling()', () => {
  it('should start polling', async () => {
    expect(() => bot.startPolling()).not.toThrow();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    bot.stopPolling();
  });
});

describe('.stopPolling()', () => {
  beforeAll(() => {
    bot.startPolling();
  });

  it('should stop polling', () => {
    expect(() => bot.stopPolling()).not.toThrow();
  });
});

describe('.isTelegramError()', () => {
  it('should return true for Telegram-related errors', () => {
    const telegramError = new TelegramError({
      ok: false,
      description:
        'Conflict: terminated by other getUpdates request; make sure that only one bot instance is running',
      error_code: 409,
    });
    expect(TelegramBot.isTelegramError(telegramError)).toBe(true);
  });

  it('should return false for non-Telegram-related errors', () => {
    const nonTelegramError = new Error('Database connection failed');
    expect(TelegramBot.isTelegramError(nonTelegramError)).toBe(false);
  });
});

describe('.getMe()', () => {
  it('should return bot info', async () => {
    await expect(bot.getMe()).resolves.toHaveProperty('is_bot', true);
  });
});

describe('.sendMessage()', () => {
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

  it('should send message reply', async () => {
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
  it('should send voice from file', async () => {
    await expect(
      bot.sendVoice({
        chat_id: USERID,
        voice: createReadStream('tests/data/voice.ogg'),
      }),
    ).resolves.toHaveProperty('voice');
  });

  it('should send voice from buffer', async () => {
    await expect(
      bot.sendVoice({
        chat_id: USERID,
        voice: await readFile('tests/data/voice.ogg'),
      }),
    ).resolves.toHaveProperty('voice');
  });
});

describe('.sendVideoNote()', () => {
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
  it('should get user profile photos', async () => {
    await expect(
      bot.getUserProfilePhotos({
        user_id: USERID,
      }),
    ).resolves.toHaveProperty('photos', expect.any(Array));
  });
});

describe('.getFile()', () => {
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
  it('should get sticker set', async () => {
    await expect(
      bot.getStickerSet({
        name: 'Animals',
      }),
    ).resolves.toHaveProperty('name', 'Animals');
  });
});

describe('.getStarTransactions()', () => {
  it('should get star transactions', async () => {
    await expect(
      bot.getStarTransactions({
        offset: 0,
        limit: 100,
      }),
    ).resolves.toHaveProperty('transactions');
  });
});

describe('.setMyName()', () => {
  it('should set my name', async () => {
    await expect(
      bot.setMyName({
        name: 'typescript-telegram-bot-api',
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyName()', () => {
  it('should get my name', async () => {
    await expect(
      bot.getMyName({
        language_code: 'en',
      }),
    ).resolves.toHaveProperty('name');
  });
});

describe('.setMyDescription()', () => {
  it('should set my description', async () => {
    await expect(
      bot.setMyDescription({
        //long description
        description:
          'This is a Telegram Bot for testing npm package typescript-telegram-bot-api',
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyDescription()', () => {
  it('should get my description', async () => {
    await expect(
      bot.getMyDescription({
        language_code: 'en',
      }),
    ).resolves.toHaveProperty('description');
  });
});

describe('.setMyShortDescription()', () => {
  it('should set my short description', async () => {
    await expect(
      bot.setMyShortDescription({
        short_description: 'A Telegram Bot API for TypeScript',
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.getMyShortDescription()', () => {
  it('should get my short description', async () => {
    await expect(
      bot.getMyShortDescription({
        language_code: 'en',
      }),
    ).resolves.toHaveProperty('short_description');
  });
});

describe('.setMyCommands()', () => {
  it('should set my commands', async () => {
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
  it('should get my commands', async () => {
    await expect(
      bot.getMyCommands({
        language_code: 'en',
      }),
    ).resolves.toBeInstanceOf(Array);
  });
});

describe('.deleteMyCommands()', () => {
  it('should delete my commands', async () => {
    await expect(
      bot.deleteMyCommands({
        scope: { type: 'default' },
        language_code: 'en',
      }),
    ).resolves.toBe(true);
  });
});

describe('.banChatMember()', () => {
  it('should ban chat member', async () => {
    await expect(
      bot.banChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.unbanChatMember()', () => {
  it('should unban chat member', async () => {
    await expect(
      bot.unbanChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.restrictChatMember()', () => {
  it('should restrict chat member', async () => {
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
  it('should promote chat member', async () => {
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
  it('should set chat administrator custom title', async () => {
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
  it('should ban chat sender chat', async () => {
    await expect(
      bot.banChatSenderChat({
        chat_id: TEST_GROUP_ID,
        sender_chat_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.unbanChatSenderChat()', () => {
  it('should unban chat sender chat', async () => {
    await expect(
      bot.unbanChatSenderChat({
        chat_id: TEST_GROUP_ID,
        sender_chat_id: USERID,
      }),
    ).rejects.toThrow("400 Bad Request: can't remove chat owner");
  });
});

describe('.setChatPermissions()', () => {
  it('should set chat permissions', async () => {
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
  it('should export chat invite link', async () => {
    await expect(
      bot.exportChatInviteLink({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toContain('https://t.me/+');
  });
});

describe('.createChatInviteLink()', () => {
  it('should create chat invite link', async () => {
    await expect(
      bot.createChatInviteLink({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toHaveProperty(
      'invite_link',
      expect.stringMatching('https://t.me/+'),
    );
  });
});

describe('.editChatInviteLink()', () => {
  it('should edit chat invite link', async () => {
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
    ).resolves.toHaveProperty(
      'invite_link',
      expect.stringMatching('https://t.me/+'),
    );
  });
});

describe('.revokeChatInviteLink()', () => {
  it('should revoke chat invite link', async () => {
    const { invite_link } = await bot.createChatInviteLink({
      chat_id: TEST_GROUP_ID,
    });

    await expect(
      bot.revokeChatInviteLink({
        chat_id: TEST_GROUP_ID,
        invite_link,
      }),
    ).resolves.toHaveProperty(
      'invite_link',
      expect.stringMatching('https://t.me/+'),
    );
  });
});

describe('.setChatPhoto()', () => {
  it('should set chat photo', async () => {
    await expect(
      bot.setChatPhoto({
        chat_id: TEST_GROUP_ID,
        photo: createReadStream('tests/data/photo.jpg'),
      }),
    ).resolves.toBe(true);
  });
});

describe('.deleteChatPhoto()', () => {
  it('should delete chat photo', async () => {
    await expect(
      bot.deleteChatPhoto({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.setChatTitle()', () => {
  it('should set chat title', async () => {
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

  it('should set chat description', async () => {
    await expect(
      bot.setChatDescription({
        chat_id: TEST_GROUP_ID,
        description: `This is a test group for typescript-telegram-bot-api ${unixTime}`,
      }),
    ).resolves.toBe(true);
  });
});

describe('.pinChatMessage()', () => {
  it('should pin chat message', async () => {
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

  it('should unpin chat message', async () => {
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
  it('should unpin all chat messages', async () => {
    await expect(
      bot.unpinAllChatMessages({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.getChat()', () => {
  it('should get chat', async () => {
    await expect(
      bot.getChat({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toHaveProperty('id', TEST_GROUP_ID);
  });
});

describe('.getChatAdministrators()', () => {
  it('should get chat administrators', async () => {
    await expect(
      bot.getChatAdministrators({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBeInstanceOf(Array);
  });
});

describe('.getChatMemberCount()', () => {
  it('should get chat members count', async () => {
    await expect(
      bot.getChatMemberCount({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBeGreaterThan(0);
  });
});

describe('.getChatMember()', () => {
  it('should get chat member', async () => {
    await expect(
      bot.getChatMember({
        chat_id: TEST_GROUP_ID,
        user_id: TEST_GROUP_MEMBER_ID,
      }),
    ).resolves.toHaveProperty('user.id', TEST_GROUP_MEMBER_ID);
  });
});

describe('.setChatStickerSet()', () => {
  it('should set chat sticker set', async () => {
    await expect(
      bot.setChatStickerSet({
        chat_id: TEST_GROUP_ID,
        sticker_set_name: 'Animals',
      }),
    ).rejects.toThrow("400 Bad Request: can't set supergroup sticker set");
  });
});

describe('.deleteChatStickerSet()', () => {
  it('should delete chat sticker set', async () => {
    await expect(
      bot.deleteChatStickerSet({
        chat_id: TEST_GROUP_ID,
      }),
    ).rejects.toThrow("400 Bad Request: can't set supergroup sticker set");
  });
});

describe('.getForumTopicIconStickers()', () => {
  it('should get forum topic icon stickers', async () => {
    await expect(bot.getForumTopicIconStickers()).resolves.toBeInstanceOf(
      Array,
    );
  });
});

describe('.createForumTopic()', () => {
  let createdTopic = null as null | ForumTopic;

  it('should create forum topic', async () => {
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

  it('should edit forum topic', async () => {
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

  it('should close forum topic', async () => {
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

  it('should reopen forum topic', async () => {
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

  it('should delete forum topic', async () => {
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

  it('should unpin all forum topic messages', async () => {
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

  it('should edit general forum topic', async () => {
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

  it('should close general forum topic', async () => {
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

  it('should reopen general forum topic', async () => {
    await expect(
      bot.reopenGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.hideGeneralForumTopic()', () => {
  it('should hide general forum topic', async () => {
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

  it('should unhide general forum topic', async () => {
    await expect(
      bot.unhideGeneralForumTopic({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.unpinAllGeneralForumTopicMessages()', () => {
  it('should unpin all general forum topic messages', async () => {
    await expect(
      bot.unpinAllGeneralForumTopicMessages({
        chat_id: TEST_GROUP_ID,
      }),
    ).resolves.toBe(true);
  });
});

describe('.answerCallbackQuery()', () => {
  it('should answer callback query', async () => {
    await expect(
      bot.answerCallbackQuery({
        callback_query_id: 'QUERY_ID_INVALID',
        text: 'Callback query answered',
      }),
    ).rejects.toThrow(
      '400 Bad Request: query is too old and response timeout expired or query ID is invalid',
    );
  });
});

describe('.getUserChatBoosts()', () => {
  it('should get user chat boosts', async () => {
    await expect(
      bot.getUserChatBoosts({
        chat_id: TEST_GROUP_ID,
        user_id: USERID,
      }),
    ).resolves.toHaveProperty('boosts');
  });
});

describe('.getBusinessConnection()', () => {
  it('should get business connection', async () => {
    await expect(
      bot.getBusinessConnection({
        business_connection_id: 'INVALID_BUSINESS_CONNECTION_ID',
      }),
    ).rejects.toThrow('400 Bad Request: business connection not found');
  });
});

describe('.setChatMenuButton()', () => {
  it('should set chat menu button', async () => {
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
  it('should get chat menu button', async () => {
    await expect(
      bot.getChatMenuButton({
        chat_id: USERID,
      }),
    ).resolves.toHaveProperty('type');
  });
});

describe('.setMyDefaultAdministratorRights()', () => {
  it('should set my default administrator rights', async () => {
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
  it('should get my default administrator rights', async () => {
    await expect(
      bot.getMyDefaultAdministratorRights({}),
    ).resolves.toHaveProperty('is_anonymous');
  });
});
